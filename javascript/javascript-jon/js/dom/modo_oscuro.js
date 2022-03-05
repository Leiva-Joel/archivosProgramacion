const d = document,
  ls = localStorage;

export default function darkMode(btn) {
  const $darkModeBtn = d.querySelector(btn);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      d.body.classList.toggle("dark-mode");

      if (d.body.classList.contains("dark-mode")) {
        $darkModeBtn.textContent = "☀️";
        ls.setItem("theme", "dark");
      } else {
        $darkModeBtn.textContent = "🌙";
        ls.setItem("theme", "light");
      }
    }
  });

  if (ls.getItem("theme") === "dark") {
    d.body.classList.add("dark-mode");
    $darkModeBtn.textContent = "☀️";
  }
}
