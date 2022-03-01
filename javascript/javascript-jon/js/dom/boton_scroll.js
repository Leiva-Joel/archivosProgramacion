const d = document
export default function btnScroll(btn) {

  d.addEventListener("scroll", e => {
    if(scrollY > 350) {
      d.querySelector(btn).classList.add("btn-scroll--show")
    }

    if(scrollY < 350) {
      d.querySelector(btn).classList.remove("btn-scroll--show")
    }
  }) 
}