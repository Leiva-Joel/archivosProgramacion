const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximunAge: 0,
    };

  const success = (position) => {
    const coords = position.coords;

    $id.innerHTML = `
      <p>Tu posicion actual es:</p>
      <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Presicion: <b>${coords.accuracy}</b> metros</li>
      </ul>
      <a target="_blank" rel="noopener" href="https://www.google.com/maps/@${coords.latitude},${coords.longitude}">Ver en GoogleMaps</a>
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
