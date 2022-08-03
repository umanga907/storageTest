var swiper = new Swiper(".featured-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
    },
  },
});
