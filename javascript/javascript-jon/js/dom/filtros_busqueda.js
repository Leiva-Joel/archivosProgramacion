const d = document;

export default function filterSearch(text, card, cards, search) {
  const $text = d.querySelectorAll(text),
    $card = d.querySelectorAll(card),
    $cards = d.querySelector(cards);

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(`#${search}`)) {
      let searches = d.getElementById(search).value,
        expReg = new RegExp(searches, "gi");

      $text.forEach((text) => {
        let parent = text.parentElement;

        if (!expReg.test(text.textContent)) text.textContent = "1";

        /* !expReg.test(text.textContent)
          ? parent.classList.add("card--hidden")
          : parent.classList.remove("card--hidden") */
      });
    }
  });
}
