const d = document;

export default function digitalRaffle(selector, btn, players) {
  players.forEach((el) => {
    d.querySelector(selector).innerHTML += `<li>${el}</li>`;
  });

  d.addEventListener("click", (e) => {
    const winner = players[Math.floor(Math.random() * players.length)];

    if (e.target.matches(btn)) {
      alert(winner);
      console.info(winner);
    }
  });
}
