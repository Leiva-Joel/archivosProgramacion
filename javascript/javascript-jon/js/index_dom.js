import btnScroll from "./dom/boton_scroll.js";
import sliderResponsive from "./dom/carrusel.js";
import countdown from "./dom/cuenta_regresiva.js";
import dispositivesDetect from "./dom/deteccion_dispositivos.js";
import connection from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import filterSearch from "./dom/filtros_busqueda.js";
import geolocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import darkMode from "./dom/modo_oscuro.js";
import responsiveJS from "./dom/objeto_responsive.js";
import responsiveTest from "./dom/prueba_responsive.js";
import { reloj, alarma } from "./dom/reloj.js";
import digitalRaffle from "./dom/sorteo.js";
import { moveBall, shortcuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".menu-icon", ".menu", ".menu__link");

  reloj(".iniciar-reloj", ".detener-reloj", ".reloj");

  alarma(".iniciar-alarma", ".detener-alarma", "./assets/assets_alarma.mp3");

  moveBall(".ball", ".background");

  shortcuts();

  countdown("countdown", "Nov 21, 2022 19:00:00", "Vacaciones!!!");

  btnScroll(".btn-scroll");

  darkMode(".dark-mode-btn");

  //responsiveJS("responsive-video", "responsive-map");

  responsiveTest(".form-tester", "url", "width", "height", "open", "close");

  dispositivesDetect("user-device");

  connection("online", "offline");

  webCam("cam");

  geolocation("ubication");

  filterSearch(".text-card", "search");

  digitalRaffle(".raffle", ".win", [
    "JavasCript",
    "PHP",
    "Java",
    "Python",
    "Ruby",
    "Go",
    "Visual Basic",
    "Rust",
    "Perl",
  ]);

  sliderResponsive();
});

//const $search = d.getElementById("search")

/* 
d.addEventListener("keyup", e => {
  d.getElementById("copia").textContent = $search.value
}) */
