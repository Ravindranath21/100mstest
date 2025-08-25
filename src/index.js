import {
  HMSReactiveStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectPeers,
  selectIsConnectedToRoom,
  selectVideoTrackByID,
} from "@100mslive/hms-video-store";

// Initialize HMS Store
const hmsManager = new HMSReactiveStore();
hmsManager.triggerOnSubscribe();
const hmsStore = hmsManager.getStore();
const hmsActions = hmsManager.getActions();

// HTML elements
let form,
  conference,
  peersContainer,
  leaveBtn,
  muteAudio,
  muteVideo,
  controls,
  rejoinScreen,
  rejoinBtn,
  timeoutScreen;

// Timer variables
let rejoinTimer = null;
let timeRemaining = 120;

const micSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <line x1="8" y1="21" x2="16" y2="21" />
  </svg>
`;

const micOffSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="4" y1="4" x2="20" y2="20" />
  </svg>
`;

const vidSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"
     stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 7l-7 5 7 5V7z" />
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
</svg>
`;

const vidOffSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8"
     stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 7l-7 5 7 5V7z" />
  <path d="M1 5h10m4 0h1a2 2 0 0 1 2 2v8m0 2H5a2 2 0 0 1-2-2V7" />
  <line x1="1" y1="1" x2="23" y2="23" />
</svg>
`;
// Initialize DOM elements after page load
function initializeElements() {
  form = document.getElementById("join");
  conference = document.getElementById("conference");
  peersContainer = document.getElementById("peers-container");
  leaveBtn = document.getElementById("leave-btn");
  muteAudio = document.getElementById("mute-aud");
  muteVideo = document.getElementById("mute-vid");
  controls = document.getElementById("controls");
  rejoinScreen = document.getElementById("rejoin-screen");
  rejoinBtn = document.getElementById("rejoin-btn");
  timeoutScreen = document.getElementById("timeout-screen");
}

// store peer IDs already rendered to avoid re-render on mute/unmute
const renderedPeerIDs = new Set();

// Joining the room
// Function to get query params
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// Extract values
const authToken = getQueryParam("authToken");
const userName = getQueryParam("userName") || "Guest";

// Auto join if authToken is available
window.addEventListener("DOMContentLoaded", async () => {
  // Initialize DOM elements first
  initializeElements();

  // Set up event listeners
  leaveBtn.onclick = leaveRoom;
  rejoinBtn.onclick = rejoinRoom;
  muteAudio.onclick = async () => {
    const audioEnabled = !hmsStore.getState(selectIsLocalAudioEnabled);
    await hmsActions.setLocalAudioEnabled(audioEnabled);

    const iconContainer = muteAudio.querySelector("svg");
    iconContainer.outerHTML = audioEnabled ? micSVG : micOffSVG;

    muteAudio.querySelector("span").textContent = audioEnabled
      ? "Mute"
      : "Unmute";
  };
  muteVideo.onclick = async () => {
    const videoEnabled = !hmsStore.getState(selectIsLocalVideoEnabled);
    await hmsActions.setLocalVideoEnabled(videoEnabled);
    const iconContainer = muteVideo.querySelector("svg");
    iconContainer.outerHTML = videoEnabled ? vidSVG : vidOffSVG;
    muteVideo.querySelector("span").textContent = videoEnabled
      ? "Hide"
      : "Unhide";
  };

  if (!authToken) {
    console.error("Auth token missing in query params");
    return;
  }

  console.log("Joining room with token:", authToken);
  await hmsActions.join({
    userName,
    authToken,
  });
});

// Timer functions
function startRejoinTimer() {
  timeRemaining = 120;
  updateTimerDisplay();

  rejoinTimer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      clearInterval(rejoinTimer);
      showTimeoutScreen();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerText = document.getElementById("timer-text");
  const timerProgress = document.getElementById("timer-progress");

  if (timerText) {
    timerText.textContent = timeRemaining;
  }

  if (timerProgress) {
    const circumference = 226.2; // 2 * π * 36
    const progress = (timeRemaining / 120) * circumference;
    timerProgress.style.strokeDashoffset = circumference - progress;

    // Change color when time is running low
    if (timeRemaining <= 30) {
      timerProgress.style.stroke = "#f56565";
      timerText.style.color = "#f56565";
    } else {
      timerProgress.style.stroke = "#4299e1";
      timerText.style.color = "#2d3748";
    }
  }
}

function stopRejoinTimer() {
  if (rejoinTimer) {
    clearInterval(rejoinTimer);
    rejoinTimer = null;
  }
}

// Leaving the room
async function leaveRoom() {
  await hmsActions.leave();
  peersContainer.innerHTML = "";
  renderedPeerIDs.clear();
  // Show rejoin screen instead of form
  showRejoinScreen();
}

// Show rejoin screen
function showRejoinScreen() {
  if (form) form.classList.add("hide");
  if (conference) conference.classList.add("hide");
  if (leaveBtn) leaveBtn.classList.add("hide");
  if (controls) controls.classList.add("hide");
  if (timeoutScreen) timeoutScreen.classList.add("hide");
  if (rejoinScreen) rejoinScreen.classList.remove("hide");

  // Start the timer
  startRejoinTimer();
}

// Show timeout screen
function showTimeoutScreen() {
  if (form) form.classList.add("hide");
  if (conference) conference.classList.add("hide");
  if (leaveBtn) leaveBtn.classList.add("hide");
  if (controls) controls.classList.add("hide");
  if (rejoinScreen) rejoinScreen.classList.add("hide");
  if (timeoutScreen) timeoutScreen.classList.remove("hide");

  // Stop the timer
  stopRejoinTimer();
}

// Rejoin the room
async function rejoinRoom() {
  if (!authToken) {
    console.error("Auth token missing for rejoin");
    return;
  }

  // Stop the timer when rejoining
  stopRejoinTimer();

  console.log("Rejoining room with token:", authToken);
  await hmsActions.join({
    userName,
    authToken,
  });
}

// Cleanup if user refreshes the tab or navigates away
window.onunload = window.onbeforeunload = leaveRoom;

// Helper function to create html elements
function createElementWithClass(tag, className) {
  const newElement = document.createElement(tag);
  newElement.className = className;
  return newElement;
}

// Render a single peer
function renderPeer(peer) {
  const peerTileDiv = createElementWithClass("div", "peer-tile");
  const videoElement = createElementWithClass("video", "peer-video");
  const peerTileName = createElementWithClass("div", "peer-name");
  videoElement.autoplay = true;
  videoElement.muted = true;
  videoElement.playsinline = true;
  peerTileName.textContent = peer.name;

  hmsStore.subscribe((track) => {
    if (!track) {
      return;
    }
    if (track.enabled) {
      hmsActions.attachVideo(track.id, videoElement);
    } else {
      hmsActions.detachVideo(track.id, videoElement);
    }
  }, selectVideoTrackByID(peer.videoTrack));

  peerTileDiv.append(videoElement);
  peerTileDiv.append(peerTileName);

  renderedPeerIDs.add(peer.id);
  return peerTileDiv;
}

// display a tile for each peer in the peer list
function renderPeers() {
  const peers = hmsStore.getState(selectPeers);

  peers.forEach((peer) => {
    if (!renderedPeerIDs.has(peer.id) && peer.videoTrack) {
      peersContainer.append(renderPeer(peer));
    }
  });
}

// Reactive state - renderPeers is called whenever there is a change in the peer-list
hmsStore.subscribe(renderPeers, selectPeers);

// Showing the required elements on connection/disconnection
function onConnection(isConnected) {
  if (isConnected) {
    // Stop timer when successfully connected
    stopRejoinTimer();

    if (form) form.classList.add("hide");
    if (rejoinScreen) rejoinScreen.classList.add("hide");
    if (timeoutScreen) timeoutScreen.classList.add("hide");
    if (conference) conference.classList.remove("hide");
    if (leaveBtn) leaveBtn.classList.remove("hide");
    if (controls) controls.classList.remove("hide");
  } else {
    // Only show form if we haven't left the room manually
    if (rejoinScreen && !rejoinScreen.classList.contains("hide")) {
      return; // Keep rejoin screen visible
    }
    if (timeoutScreen && !timeoutScreen.classList.contains("hide")) {
      return; // Keep timeout screen visible
    }
    if (form) form.classList.remove("hide");
    if (conference) conference.classList.add("hide");
    if (leaveBtn) leaveBtn.classList.add("hide");
    if (controls) controls.classList.add("hide");
  }
}

// Listen to the connection state
hmsStore.subscribe(onConnection, selectIsConnectedToRoom);
