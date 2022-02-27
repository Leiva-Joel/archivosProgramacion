import hamburgerMenu from "./dom/menu-hamburguesa.js";
import { reloj, alarma } from "./dom/reloj.js";

const d = document

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".menu-icon", ".menu", ".menu__link")
  
  reloj(".iniciar-reloj", ".detener-reloj", ".reloj")

  alarma(".iniciar-alarma", ".detener-alarma", "./assets/assets_alarma.mp3")
})