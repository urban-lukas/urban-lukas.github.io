var swiper = new Swiper(".mySwiper", {
    grabCursor: false,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
    414: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1224: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});
