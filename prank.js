window.onload = function () {
  const video = document.getElementById('prank-video');
  const audio = document.getElementById('prank-audio');

  // Ganti link di bawah ini dengan link video prank kamu (mp4)
  video.src = "https://files.catbox.moe/x24fxy.mp4";
  video.load();
  audio.load();
  audio.play();
};
