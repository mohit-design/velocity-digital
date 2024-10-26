$(function() {
  // Team Slider JS
  var $swiper = $(".team-slider-container");
  var $bottomSlideContent = null; 
  var mySwiper = new Swiper(".team-slider-container", {
    slidesPerView: 4,
    spaceBetween: 60,
    pagination: {
        el: ".slider__pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  });
});