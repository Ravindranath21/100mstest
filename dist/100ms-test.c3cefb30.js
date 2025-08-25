const audioButtons = document.querySelectorAll('#mute-aud');
const videoButtons = document.querySelectorAll('#mute-vid');
audioButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const icon = button.querySelector('i');
        button.classList.toggle('muted');
        if (icon.classList.contains('fa-microphone')) {
            icon.classList.replace('fa-microphone', 'fa-microphone-slash');
            const label = button.querySelector('span');
            if (label) label.textContent = 'Unmute';
        } else {
            icon.classList.replace('fa-microphone-slash', 'fa-microphone');
            const label = button.querySelector('span');
            if (label) label.textContent = 'Mute';
        }
    });
});
videoButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const icon = button.querySelector('i');
        button.classList.toggle('camera-off');
        if (icon.classList.contains('fa-video')) {
            icon.classList.replace('fa-video', 'fa-video-slash');
            const label = button.querySelector('span');
            if (label) label.textContent = 'Show';
        } else {
            icon.classList.replace('fa-video-slash', 'fa-video');
            const label = button.querySelector('span');
            if (label) label.textContent = 'Hide';
        }
    });
});

//# sourceMappingURL=100ms-test.c3cefb30.js.map
