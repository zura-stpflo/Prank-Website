window.onload = function () {
  const video = document.getElementById('prank-video');
  const audio = document.getElementById('prank-audio');

  video.src = "https://files.catbox.moe/x24fxy.mp4";
  video.load();
  audio.load();
  audio.play();

  const maxPopups = 9999;
  let popupCount = 0;

  function createPopup() {
    if (popupCount >= maxPopups) {
      triggerDelayEffect();
      return;
    }

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
    setTimeout(createPopup, 200);
  }

  // ❌ DELAY EFFECT - Tidak bisa klik/scroll sementara
  function triggerDelayEffect() {
    const blocker = document.createElement("div");
    blocker.id = "delay-block";
    blocker.innerHTML = `
      <div class="delay-message">
        🛑 Sistem Membeku...<br>Mohon Tunggu...
      </div>
    `;
    document.body.appendChild(blocker);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      blocker.remove();
      document.body.style.overflow = "auto";
    }, 10000); // Delay 10 detik
  }

  createPopup();
};
