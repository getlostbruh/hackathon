document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-carousel', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    pauseOnHover: true,
    interval: 4000,
    keyboard: 'global',
    arrows: true,
    pagination: true,
    drag: true,
  }).mount();
});
