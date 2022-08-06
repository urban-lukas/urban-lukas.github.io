var swiper = new Swiper(".mySwiper", {
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    // when window width is >= 680px
    720: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 900px
    800: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});