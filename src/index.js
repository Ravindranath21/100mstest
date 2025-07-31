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
const form = document.getElementById("join");
const conference = document.getElementById("conference");
const peersContainer = document.getElementById("peers-container");
const leaveBtn = document.getElementById("leave-btn");
const muteAudio = document.getElementById("mute-aud");
const muteVideo = document.getElementById("mute-vid");
const controls = document.getElementById("controls");

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

// Leaving the room
async function leaveRoom() {
  await hmsActions.leave();
  peersContainer.innerHTML = "";
}

// Cleanup if user refreshes the tab or navigates away
window.onunload = window.onbeforeunload = leaveRoom;
leaveBtn.onclick = leaveRoom;

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

// Mute and unmute audio
muteAudio.onclick = async () => {
  const audioEnabled = !hmsStore.getState(selectIsLocalAudioEnabled);
  await hmsActions.setLocalAudioEnabled(audioEnabled);
  muteAudio.textContent = audioEnabled ? "Mute" : "Unmute";
};

// Mute and unmute video
muteVideo.onclick = async () => {
  const videoEnabled = !hmsStore.getState(selectIsLocalVideoEnabled);
  await hmsActions.setLocalVideoEnabled(videoEnabled);
  muteVideo.textContent = videoEnabled ? "Hide" : "Unhide";
};

// Showing the required elements on connection/disconnection
function onConnection(isConnected) {
  if (isConnected) {
    form.classList.add("hide");
    conference.classList.remove("hide");
    leaveBtn.classList.remove("hide");
    controls.classList.remove("hide");
  } else {
    form.classList.remove("hide");
    conference.classList.add("hide");
    leaveBtn.classList.add("hide");
    controls.classList.add("hide");
  }
}

// Listen to the connection state
hmsStore.subscribe(onConnection, selectIsConnectedToRoom);
