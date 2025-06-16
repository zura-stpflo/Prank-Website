document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("alert-audio");
  audio.play();

  let count = 0;
  const total = 9999;

  function showNextAlert() {
    if (count < total) {
      setTimeout(() => {
        alert(`⚠️ SISTEM ANDA TELAH DISUSUPI MALWARE!\n(${count + 1}/${total})\nSegera matikan perangkat Anda!`);
        count++;
        showNextAlert();
      }, 300); // delay 3 detik
    }
  }

  showNextAlert();
});
