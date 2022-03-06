const d = document,
  n = navigator;

export default function geolocation(id) {
  const $div = d.getElementById(id);

  n.geolocation.getCurrentPosition((position) => {
    let coords = position.coords;

    $div.innerHTML = `
      <br>
      <p>Tu posicion actual es:</p>
      <br>
      <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precision: ${coords.accuracy} metros</li>
      </ul>
      <br>
      <a target="_blank" href="https://www.google.com/maps/@${coords.latitude},${coords.longitude}">Ver en Google Maps</a>
      `;
  });
}
