import hamburgerMenu from "./dom/menu-hamburguesa-jon.js";
import { digitalClock, alarm } from "./dom/reloj-jon.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a")
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
  alarm("./assets/assets_alarma.mp3", "#activar-alarma", "#desactivar-alarma")
})