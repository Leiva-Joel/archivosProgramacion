const $menuIcon = document.querySelector(".nav__icon"),
  $menu = document.querySelector(".menu"),
  $menuLinks = document.querySelector(".menu__link")

$menuIcon.addEventListener("click", e => {
  $menu.classList.toggle("menu--show")
})

$menuLinks.addEventListener("click", e => {
  $menu.classList.toggle("menu--show")
})