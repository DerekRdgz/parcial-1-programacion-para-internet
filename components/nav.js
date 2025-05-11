(async () => {
  const resp = await fetch("components/navbar.html");
  const html = await resp.text();
  document.getElementById("navbar").innerHTML = html;

  const sessionLi = document.getElementById("sessionArea");
  const token = localStorage.getItem("token");
  const nameLS = localStorage.getItem("name");

  if (token && nameLS) {
    sessionLi.innerHTML = `
        <span id="profileBtn" class="navbar-text me-3 fw-semibold" style="cursor: pointer">Hola, ${nameLS}</span>
        <button id="logoutBtn" class="btn btn-outline-secondary btn-sm">Cerrar sesión</button>
      `;
    document.getElementById("logoutBtn").onclick = () => {
      localStorage.clear();
      location.href = "login.html";
    };
    document.getElementById("profileBtn").onclick = () => {
      location.href = "profile.html";
    };
  } else {
    sessionLi.innerHTML = `
        <a class="btn btn-sm text-whit" href="login.html" style="background-color: #123333">Inicia sesión</a>
      `;
  }
})();
