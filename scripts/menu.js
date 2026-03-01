const toggle = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    // Cambiar icono
    if (menu.classList.contains("active")) {
      toggle.textContent = "✕";
    } else {
      toggle.textContent = "☰";
    }
  });

  // Cerrar al hacer click en un enlace
  document.querySelectorAll(".navbar__menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      toggle.textContent = "☰";
    });
  });
}
