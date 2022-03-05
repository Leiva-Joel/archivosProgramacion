const d = document,
  w = window,
  n = navigator;

export default function connection(msgOn, msgOff) {
  const $msgOn = d.getElementById(msgOn),
    $msgOff = d.getElementById(msgOff);

  w.addEventListener("online", (e) => {
    if (navigator.onLine === true) {
      let onTempo = setInterval(() => {
        $msgOn.classList.add("connection--show");
      }, 0);

      setTimeout(() => {
        clearInterval(onTempo);
        $msgOn.classList.remove("connection--show");
      }, 3000);
    }
  });

  w.addEventListener("offline", (e) => {
    if (navigator.onLine === false) {
      let offTempo = setInterval(() => {
        $msgOff.classList.add("connection--show");
      }, 0);

      setTimeout(() => {
        clearInterval(offTempo);
        $msgOff.classList.remove("connection--show");
      }, 3000);
    }
  });
}
