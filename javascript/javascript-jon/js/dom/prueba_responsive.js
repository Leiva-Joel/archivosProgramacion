const d = document,
  w = window;

export default function responsiveTest(form, url, w, h, op, cl) {
  let newWindow;

  d.addEventListener("submit", (e) => {
    if (e.target.matches(form)) {
      e.preventDefault();

      const $URL = d.getElementById(url).value,
        $w = d.getElementById(w).value,
        $h = d.getElementById(h).value;
      console.log($URL);

      newWindow = open(
        $URL,
        "newWindow",
        `innerWidth=${$w}, innerHeight=${$h}`
      );
    }
  });

  d.addEventListener("reset", (e) => {
    if (e.target.matches(form)) {
      e.preventDefault();
      newWindow.close();
    }
  });
}
