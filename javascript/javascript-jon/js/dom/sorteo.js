const d = document;

export default function digitalRaffle(selector, btn, players) {
  const $ul = d.querySelector(selector);

  players.forEach((el) => {
    $ul.innerHTML += `<li>${el}</li>`;
  });

  d.addEventListener("click", (e) => {
    const winner = players[Math.floor(Math.random() * players.length)];

    if (e.target.matches(btn)) {
      alert(winner);
      console.info(winner);
    }
  });
}
