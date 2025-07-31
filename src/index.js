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
  const joinBtn = document.getElementById("join-btn");
  const conference = document.getElementById("conference");
  const peersContainer = document.getElementById("peers-container");
  const leaveBtn = document.getElementById("leave-btn");
  const muteAudio = document.getElementById("mute-aud");
  const muteVideo = document.getElementById("mute-vid");
  const controls = document.getElementById("controls");
  
  // store peer IDs already rendered to avoid re-render on mute/unmute
  const renderedPeerIDs = new Set();
  
  // Joining the room
  joinBtn.onclick = async () => {
    const roomCode = document.getElementById("room-code").value
    const userName = document.getElementById("name").value
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoyLCJ0eXBlIjoiYXBwIiwiYXBwX2RhdGEiOm51bGwsImFjY2Vzc19rZXkiOiI2ODhhMGM1ZTE0NWNiNGU4NDQ5YjA2YTMiLCJyb2xlIjoiaG9zdCIsInJvb21faWQiOiI2ODhiMThjY2E1YmE4MzI2ZTZlYjU1ZjgiLCJ1c2VyX2lkIjoiMzYxM2FjYTAtMTA3Ny00N2E3LThiYTAtOGNlYzNiYmMwMTQxIiwiZXhwIjoxNzU0MDMyNzE3LCJqdGkiOiJlM2QxOGMwNi1lMzBmLTQ0OWEtYTk3MC02MDA2MWJlMGNkMWEiLCJpYXQiOjE3NTM5NDYzMTcsImlzcyI6IjY4OGEwYzVlMTQ1Y2I0ZTg0NDliMDZhMSIsIm5iZiI6MTc1Mzk0NjMxNywic3ViIjoiYXBpIn0.QLVSURr65M8rOPXy8yJsffLCXGqxMVFHi9ELunAv66A"
    console.log(authToken);
    hmsActions.join({
      userName,
      authToken
    });
  };
  
  
  
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
  