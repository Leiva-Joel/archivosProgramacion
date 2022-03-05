const d = document;

export default function btnScroll(btn) {
  d.addEventListener("scroll", (e) => {
    scrollY > 600
      ? d.querySelector(btn).classList.add("btn-scroll--show")
      : d.querySelector(btn).classList.remove("btn-scroll--show");
  });
}
