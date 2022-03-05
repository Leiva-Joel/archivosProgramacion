const d = document,
  n = navigator,
  ua = n.userAgent;

export default function dispositiveDetect(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/Windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera||opera mini/i),
      ie: () => ua.match(/msie||ie mobile/i),
      edge: () => ua.match(/edg/i),
      any: function () {
        return (
          this.ie(),
          this.edge(),
          this.chrome(),
          this.safari(),
          this.firefox(),
          this.opera()
        );
      },
    };

  //console.log(ua);
  //console.log(isMobile.android());
  //console.log(isMobile.ios());
  //console.log(isDesktop.linux());
  //console.log(isDesktop.windows());
  //console.log(isBrowser.chrome());

  $id.innerHTML = `
  <ul>
  <li>User Agent: <b>${ua}</b></li>
  <li>Plataform: <b>${isMobile.any()}</b></li>
  <li>Plataform: <b>${isMobile.any()} ? ${isMobile.any()} : ${isDesktop.any()}</b></li>
  <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `;

  /* Contenido Eclusivo */
  if (isBrowser.chrome()) {
    $id.innerHTML += `<P><mark>Este contenido solo se ve en chrome</mark></P>`;
  }

  if (isBrowser.firefox()) {
    $id.innerHTML += `<P><mark>Este contenido solo se ve en chrome</mark></P>`;
  }

  if (isDesktop.linux()) {
    $id.innerHTML += `<P><mark>Descarga nuestro software para Linux</mark></P>`;
  }

  if (isDesktop.mac()) {
    $id.innerHTML += `<P><mark>Descarga nuestro software para Mac OS</mark></P>`;
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<P><mark>Descarga nuestro software para Windows</mark></P>`;
  }

  /* Redirecciones */

  if(isMobile.android()) {
    window.location.href() = "https://jonmircha.com"
  }
}