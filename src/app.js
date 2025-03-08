function playPronunciation() {
  const audio = document.getElementById('name-pronunciation');
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
