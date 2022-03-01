import hamburgerMenu from "./dom/menu-hamburguesa-jon.js";
import { digitalClock, alarm } from "./dom/reloj-jon.js";
import { moveBall, shortcuts } from "./dom/teclado_jon.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a")
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
  alarm("./assets/assets_alarma.mp3", "#activar-alarma", "#desactivar-alarma")
})

d.addEventListener("keydown", e => {
  shortcuts(e)
  moveBall(e, ".ball", ".stage")
})