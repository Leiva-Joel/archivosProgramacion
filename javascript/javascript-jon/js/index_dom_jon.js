import countdown from "./dom/cuenta_regresiva_jon.js";
import hamburgerMenu from "./dom/menu-hamburguesa-jon.js";
import { digitalClock, alarm } from "./dom/reloj-jon.js";
import { moveBall, shortcuts } from "./dom/teclado_jon.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a")

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")

  alarm("./assets/assets_alarma.mp3", "#activar-alarma", "#desactivar-alarma")

  countdown("countdown", "May 23, 2022 03:23:19", "Feliz Cumple amigo y docente digital 😎")
})

d.addEventListener("keydown", e => {
  shortcuts(e)
  moveBall(e, ".ball", ".stage")
})