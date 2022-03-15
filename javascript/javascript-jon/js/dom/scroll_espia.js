const d = document;

export default function spyMenu(selector) {
  const $section = d.querySelectorAll(selector);
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(onChenge, options);

  $section.forEach((sec) => observer.observe(sec));
}
