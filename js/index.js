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
  $('.tab-listing > li > a').click(function(event){
		event.preventDefault();
		var active_tab_selector = $('.tab-listing > li.active > a').attr('href');
		var actived_nav = $('.tab-listing > li.active');
		actived_nav.removeClass('active');
		$(this).parents('li').addClass('active');
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
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
});