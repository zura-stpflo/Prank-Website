document.addEventListener("DOMContentLoaded", () => {
  alert("⚠️ Virus detected!");
  setInterval(() => {
    document.body.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  }, 300);
});
