export default function keyboardEvent(ball) {
  const d = document,
    $ball = d.querySelector(ball)

  d.addEventListener("keydown", e => {
    e.key

    if(e.key === "ArrowUp") {
      setTimeout(() => {
        $ball.style.transform = "translate(0, -20px)"
      }, 0);
    }

    if(e.key === "ArrowDown") {

      setTimeout(() => {
        $ball.style.transform = "translate(0, 20px)"
      }, 0);
    }

    if(e.key === "ArrowLeft") {

      setTimeout(() => {
        $ball.style.transform = "translate(-20px, 0)"
      }, 0);
    }

    if(e.key === "ArrowRight") {

      setTimeout(() => {
        $ball.style.transform = "translate(20px, 0)"
      }, 0);
    }
  })
}