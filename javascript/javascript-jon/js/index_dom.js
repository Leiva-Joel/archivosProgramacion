import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu-hamburguesa.js";
import { reloj, alarma } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".menu-icon", ".menu", ".menu__link");

  reloj(".iniciar-reloj", ".detener-reloj", ".reloj");

  alarma(".iniciar-alarma", ".detener-alarma", "./assets/assets_alarma.mp3");

  moveBall(".ball", ".background");

  shortcuts();

  countdown(
    ".countdown-container",
    new Date(2022, 2, 2),
    "Felicidades, la cuenta regresiva ha terminado"
  );
});
