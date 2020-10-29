(function () {
  'use strict'
  const video = document.getElementById("videoSnow");

  document.getElementById("play").addEventListener("click", playPauseVideo);
  document.getElementById("skipForward").addEventListener("click", skipForwardVideo);
  document.getElementById("skipBackwards").addEventListener("click", skipBackwardsVideo);
  document.getElementById("restart").addEventListener("click", restartVideo);

  function playPauseVideo() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function skipForwardVideo() {
    video.currentTime += 2;
  }

  function skipBackwardsVideo() {
    video.currentTime -= 2;
  }

  function restartVideo() {
    video.currentTime = 0;
  }
})();