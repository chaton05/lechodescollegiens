const USERNAME = "t.barbie1";
const PASSWORD = "Chaton05";

function checkSiteStatus() {
  fetch("config.json")
    .then(res => res.json())
    .then(data => {
      if (!data.active) {
        window.location.href = "https://i.ibb.co/4w031VXm/error-site-1.png";
      }
    });
}

function toggleSite(status) {
  const config = { active: status };
  fetch("config.json", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(config)
  }).then(() => location.reload());
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      if (user === USERNAME && pass === PASSWORD) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
        fetch("config.json")
          .then(res => res.json())
          .then(data => {
            document.getElementById("siteStatus").textContent = data.active ? "OUVERT" : "FERMÉ";
          });
      } else {
        alert("Identifiants incorrects !");
      }
    });
  }
});