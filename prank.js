document.addEventListener("DOMContentLoaded", () => {
  alert("⚠️ Sistem Anda telah disusupi!");

  const audio = document.getElementById("alert-audio");
  if (audio) {
    audio.play();
  }

  let count = 0;
  const total = 9999;

  function showNextAlert() {
    if (count < total) {
      setTimeout(() => {
        alert(`⚠️ SISTEM ANDA TELAH DISUSUPI MALWARE!\n(${count + 1}/${total})\nSegera matikan perangkat Anda!`);
        count++;
        showNextAlert();
      }, 300);
    }
  }

  showNextAlert();
});
