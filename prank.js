window.onload = function () {
  const video = document.getElementById('prank-video');
  const audio = document.getElementById('prank-audio');

  // Ganti link di bawah ini dengan link video prank kamu (mp4)
  video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
  video.load();
  audio.load();
  audio.play();
};
