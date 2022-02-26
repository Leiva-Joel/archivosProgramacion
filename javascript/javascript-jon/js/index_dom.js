import hamburgerMenu from "./dom/menu-hamburguesa.js";

const d = document

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".menu-icon", ".menu", ".menu__link")
})