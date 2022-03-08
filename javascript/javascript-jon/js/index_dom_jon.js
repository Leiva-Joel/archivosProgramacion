import scrollTopButton from "./dom/boton_scroll_jon.js";
import countdown from "./dom/cuenta_regresiva_jon.js";
import userDeviceInfo from "./dom/deteccion_dispositivos_jon.js";
import networkStatus from "./dom/deteccion_red_jon.js";
import webCam from "./dom/deteccion_webcam_jon.js";
import searchFilters from "./dom/filtros_busqueda_jon.js";
import getGeolocation from "./dom/geolocalizacion_jon.js";
import hamburgerMenu from "./dom/menu_hamburguesa_jon.js";
import { darkTheme } from "./dom/modo_oscuro_jon.js";
//import responsiveMedia from "./dom/objeto_responsive_jon.js";
import responsiveTester from "./dom/prueba_responsive_jon.js";
import { digitalClock, alarm } from "./dom/reloj-jon.js";
import { moveBall, shortcuts } from "./dom/teclado_jon.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

  alarm("./assets/assets_alarma.mp3", "#activar-alarma", "#desactivar-alarma");

  countdown(
    "countdown",
    "May 23, 2022 03:23:19",
    "Feliz Cumple amigo y docente digital 😎"
  );

  scrollTopButton(".scroll-top-btn");

  /* 
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&ab_channel=jonmircha">Ver Video</a>`,
    `<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/2SetvwBV-SU"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://www.google.com/maps/place/Torre+Eiffel/@48.8583701,2.2922926,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813">Ver Mapa</a>`,
    `<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.2922926156743895!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses!2sar!4v1646181583584!5m2!1ses!2sar"
    width="600"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
  ></iframe>`
  ); */

  responsiveTester("responsive-tester");

  userDeviceInfo("user-device");

  networkStatus();

  webCam("webcam");

  getGeolocation("geolocation");

  searchFilters(".card-filter", ".card");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
