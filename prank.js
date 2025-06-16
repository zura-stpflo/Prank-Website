document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("alert-audio");
  if (audio) {
    audio.play().catch(() => {
      console.warn("Audio autoplay mungkin diblokir oleh browser.");
    });
  }

  let count = 0;
  const total = 9999;

  function showNextAlert() {
    if (count < total) {
      setTimeout(() => {
        alert(`⚠️ SISTEM ANDA TELAH DISUSUPI MALWARE!\n(${count + 1}/${total})\nSegera matikan perangkat Anda!`);
        count++;
        showNextAlert();
      }, 300); // Ganti jadi 3000 jika mau 3 detik antar alert
    }
  }

  showNextAlert();
});
