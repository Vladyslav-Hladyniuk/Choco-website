var swiper = new Swiper('.mySwiper', {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  loop: true,
  loopedSlides: 4,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 1400,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
