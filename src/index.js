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
let pinnedPeerId = null;

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
     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
     stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 7l-7 5 7 5V7z" />
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
</svg>
`;

const vidOffSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
     stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 7l-7 5 7 5V7z" />
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  <line x1="1" y1="1" x2="23" y2="26" />
</svg>
`;

const pinSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
         fill="currentColor" class="bi bi-pin" viewBox="0 0 16 16">
      <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 
        .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 
        7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 
        1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 
        1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 
        1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 
        1.674 4 1.179 4 .5a.5.5 0 0 
        1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 
        0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 
        5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 
        5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 
        7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 
        1.8 0 0 0 .37.282"/>
    </svg>
  `;
const pinAngledSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle" viewBox="0 0 16 16">
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146m.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a5 5 0 0 0-.288-.076 5 5 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a5 5 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034q.172.002.343-.04L9.927 2.028q-.042.172-.04.343a1.8 1.8 0 0 0 .062.46z"/>
</svg>`;
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
  peerTileDiv.dataset.peerId = peer.id;

  const videoElement = createElementWithClass("video", "peer-video");
  const peerTileName = createElementWithClass("div", "peer-name");
  const pinButton = createElementWithClass("button", "pin-btn");
  const peerInfoControlContainer = createElementWithClass(
    "div",
    "peer-info-container"
  );
  pinButton.innerHTML = pinAngledSVG;

  videoElement.autoplay = true;
  videoElement.muted = true;
  videoElement.playsinline = true;
  peerTileName.textContent = peer.name;

  // Pin button click
  pinButton.onclick = () => togglePin(peer.id);

  hmsStore.subscribe((track) => {
    if (!track) return;
    if (track.enabled) {
      hmsActions.attachVideo(track.id, videoElement);
    } else {
      hmsActions.detachVideo(track.id, videoElement);
    }
  }, selectVideoTrackByID(peer.videoTrack));

  peerTileDiv.append(videoElement);
  peerInfoControlContainer.append(peerTileName);
  peerInfoControlContainer.append(pinButton);
  peerTileDiv.append(peerInfoControlContainer);
  renderedPeerIDs.add(peer.id);
  return peerTileDiv;
}

function togglePin(peerId) {
  const allTiles = document.querySelectorAll(".peer-tile");

  // Reset all pins
  allTiles.forEach((tile) => {
    tile.classList.remove("pinned");
    const btn = tile.querySelector(".pin-btn");
    if (btn) btn.innerHTML = pinAngledSVG; // reset to angled pin
  });

  // Unpin if the same peer is clicked again
  if (pinnedPeerId === peerId) {
    pinnedPeerId = null;
    return;
  }

  // Pin the clicked peer
  const tileToPin = document.querySelector(
    `.peer-tile[data-peer-id="${peerId}"]`
  );
  if (tileToPin) {
    tileToPin.classList.add("pinned");
    pinnedPeerId = peerId;

    // Change button to straight pin
    const btn = tileToPin.querySelector(".pin-btn");
    if (btn) btn.innerHTML = pinSVG;

    // Move pinned tile to the start
    const container = document.getElementById("peers-container");
    container.prepend(tileToPin);
  }
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
