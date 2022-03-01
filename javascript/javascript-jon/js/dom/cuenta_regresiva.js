const d = document;

export default function countdown(selector, dateLimit, msgEnd) {
  const diasEnMs = 1000 * 60 * 60 * 24,
    horasEnMs = 1000 * 60 * 60,
    minutosEnMs = 1000 * 60,
    segundosEnMs = 1000;

  setInterval(() => {
    let time = dateLimit.getTime() - new Date().getTime();

    if (time <= 0)
      return (d.querySelector(selector).innerHTML = `<h3>${msgEnd}</h3>`);

    d.querySelector(selector).innerHTML = `<h3>${Math.floor(
      time / diasEnMs
    )} dias ${Math.floor(time / horasEnMs)} Horas</h3>`;
  }, 1000);
}
