import hamburgerMenu from "./dom/menu-hamburguesa-jon.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a")
})