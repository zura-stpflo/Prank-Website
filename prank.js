window.onload = function () {
  const video = document.getElementById('prank-video');
  const audio = document.getElementById('prank-audio');

  // Ganti dengan video prank kamu (harus link .mp4)
  video.src = "https://files.catbox.moe/x24fxy.mp4";
  video.load();
  audio.load();
  audio.play();

  // Efek peringatan muncul terus
  let alertCount = 0;
  function showAlert() {
    if (alertCount < 20) {
      alert("⚠️ Peringatan: Sistem Anda Terinfeksi Malware!");
      alertCount++;
      setTimeout(showAlert, 500);
    }
  }
  showAlert();
};
