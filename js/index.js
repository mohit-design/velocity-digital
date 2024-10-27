$(document).ready(function() {
  // Banner MouseMove JS
  var rect = $('#bgBanner')[0].getBoundingClientRect();
  var mouse = {x: 0, y: 0, moved: false};
  $("#bgBanner").mousemove(function(e) {
    mouse.moved = true;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  // Ticker event will be called on every frame
  TweenLite.ticker.addEventListener('tick', function(){
    if (mouse.moved) {
      parallaxIt(".box-banner-image > img", -40);
    }
    mouse.moved = false;
  });
  function parallaxIt(target, movement) {
    TweenMax.to(target, 0.5, {
      x: (mouse.x - rect.width / 2) / rect.width * movement,
      y: (mouse.y - rect.height / 2) / rect.height * movement
    });
  }
  $(window).on('resize scroll', function(){
    rect = $('#bgBanner')[0].getBoundingClientRect();
  });
  // Technology Section Vertical Tab JS
  function init() {
    var initLink = $(".tab-listing .active");
    var initHeight = initLink.outerHeight();
    var initPosition = initLink.position().top;
    $(".tab-listing-border").css({
      'height': initHeight + 'px',
      'top': initPosition
    });
  }
  init();
  $('.tab-listing > li > a').click(function(event) {
		event.preventDefault();
    var height = $(this).outerHeight();
    var Position = $(this).position().top;
    $(".tab-listing-border").css({
      'height': height + 'px',
      'top': Position
    });
		var active_tab_selector = $('.tab-listing > li.active > a').attr('href');
		var actived_nav = $('.tab-listing > li.active');
		actived_nav.removeClass('active');
		$(this).parents('li').addClass('active');
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
    init();
	});
  // Case Study Slider JS
  $(".case-study-slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  // Testimonial Slider JS
  var $swiper = $(".testimonial-slider-container");
  var $bottomSlideContent = null; 
  var mySwiper = new Swiper(".testimonial-slider-container", {
    spaceBetween: 1,
    slidesPerView: 2,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 3,
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
});