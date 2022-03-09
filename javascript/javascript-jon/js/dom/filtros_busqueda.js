const d = document;

export default function filterSearch(text, search) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(`#${search}`)) {
      d.querySelectorAll(text).forEach((text) => {
        const expReg = new RegExp(d.getElementById(search).value, "gi"),
          parent = text.parentElement;

        !expReg.test(text.textContent)
          ? parent.classList.add("card--hidden")
          : parent.classList.remove("card--hidden");
      });
    }
  });
}
