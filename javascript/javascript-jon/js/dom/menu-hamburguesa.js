export default function hamburgerMenu(menuBtn, menu, menuLink) {
  const d = document

  d.addEventListener("click", e => {
    if(e.target.matches(menuBtn)) {
      d.querySelector(menu).classList.toggle("menu--show")
    }

    if(e.target.matches(menuLink)) {
      d.querySelector(menu).classList.remove("menu--show")
    }
  })
}

/* const $menuIcon = document.querySelector(".nav__icon"),
  $menu = document.querySelector(".menu"),
  $menuLinks = document.querySelector(".menu__link")

$menuIcon.addEventListener("click", e => {
  $menu.classList.toggle("menu--show")
})

$menuLinks.addEventListener("click", e => {
  $menu.classList.toggle("menu--show")
}) */