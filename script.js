function login() {
  const user = document.getElementById("username").value;
  const pw = document.getElementById("password").value;

  if (user === "admin" && pw === "admin12") {
    window.location.href = "prank.html";
  } else {
    document.getElementById("error").innerText = "Login gagal!";
  }
}
