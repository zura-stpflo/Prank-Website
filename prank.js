window.onload = function () {
  const video = document.getElementById('prank-video');
  const audio = document.getElementById('prank-audio');

  // Set video source
  video.src = "https://files.catbox.moe/x24fxy.mp4";
  video.load();
  audio.load();
  audio.play();

  // Jumlah pop-up yang ingin ditampilkan (ubah sesuai keinginan, contoh: 99)
  const maxPopups = 99999;

  let popupCount = 0;

  function createPopup() {
    if (popupCount >= maxPopups) return;

    const popup = document.createElement("div");
    popup.className = "fake-alert";
    popup.innerHTML = `
      <div class="popup-header">
        🔒 System Security Warning
        <button class="close-btn" onclick="this.parentElement.parentElement.remove()">X</button>
      </div>
      <div class="popup-body">
        ⚠️ Sistem Anda Telah Disusupi Malware!<br>
        Silakan segera matikan perangkat Anda untuk menghindari kerusakan lebih lanjut.
      </div>
    `;

    popup.style.top = `${Math.random() * 80 + 5}%`;
    popup.style.left = `${Math.random() * 80 + 5}%`;

    document.body.appendChild(popup);
    popupCount++;
    setTimeout(createPopup, 200); // jeda antar popup
  }

  createPopup();
};
