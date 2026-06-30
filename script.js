const previewVideo = document.getElementById("previewVideo");
const videoToggle = document.getElementById("videoToggle");
const soundToggle = document.getElementById("soundToggle");

if (previewVideo && videoToggle && soundToggle) {
  previewVideo.play().catch(() => {
    videoToggle.textContent = "Play Preview";
  });

  videoToggle.addEventListener("click", () => {
    if (previewVideo.paused) {
      previewVideo.play();
      videoToggle.textContent = "Pause";
    } else {
      previewVideo.pause();
      videoToggle.textContent = "Play Preview";
    }
  });

  soundToggle.addEventListener("click", () => {
    previewVideo.muted = !previewVideo.muted;
    soundToggle.textContent = previewVideo.muted ? "Sound On" : "Mute";
  });
}