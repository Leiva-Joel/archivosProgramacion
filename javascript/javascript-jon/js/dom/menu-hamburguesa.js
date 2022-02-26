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