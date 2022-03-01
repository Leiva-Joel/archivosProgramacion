const d = document;

export function moveBall(ball, background) {
  const $ball = d.querySelector(ball),
    $background = d.querySelector(background);

  let translateY = 0,
    translateX = 0,
    backgroundW = parseInt(
      getComputedStyle($background).getPropertyValue("Width")
    ),
    backgroundH = parseInt(
      getComputedStyle($background).getPropertyValue("Height")
    );

  d.addEventListener("keydown", (e) => {
    e.key;

    if (e.key === "ArrowUp") {
      translateY -= 20;

      e.preventDefault();

      if (Math.abs(translateY) > backgroundH / 2) translateY = 0;

      $ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }

    if (e.key === "ArrowDown") {
      translateY += 20;

      e.preventDefault();

      if (Math.abs(translateY) > backgroundH / 2) translateY = 0;

      $ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }

    if (e.key === "ArrowLeft") {
      translateX -= 20;

      e.preventDefault();

      if (Math.abs(translateX) > backgroundW / 2) translateX = 0;

      $ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }

    if (e.key === "ArrowRight") {
      translateX += 20;

      e.preventDefault();

      if (Math.abs(translateX) > backgroundW / 2) translateX = 0;

      $ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
  });
}

export function shortcuts() {
  d.addEventListener("keydown", (e) => {
    if (e.altKey && e.key === "a") alert("alerta");

    if (e.altKey && e.key === "c") confirm("confimacion");

    if (e.altKey && e.key === "p") prompt("prompt");
  });
}
