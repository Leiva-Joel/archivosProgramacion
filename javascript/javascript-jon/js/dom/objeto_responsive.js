const d = document,
  w = window;

export default function responsiveJS(video, map) {
  w.addEventListener("resize", (e) => {
    if (innerWidth < 900) {
      d.getElementById(
        video
      ).innerHTML = `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&ab_channel=jonmircha">Ver Video</a>`;

      d.getElementById(
        map
      ).innerHTML = `<a href="https://www.google.com/maps/place/Torre+Eiffel/@48.8583701,2.2922926,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813">Ver Mapa</a>`;
    } else {
      d.getElementById(video).innerHTML = `<iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/2SetvwBV-SU"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;

      d.getElementById(map).innerHTML = `<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.2922926156743895!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses!2sar!4v1646181583584!5m2!1ses!2sar"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>`;
    }
  });
}
