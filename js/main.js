$(document).ready(function() {
  // Header JS
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 40) {
	    $("header").addClass("active");
	   } else {
	    $("header").removeClass('active');
	   }
	});
	$(".burger-menu").click(function() {
		$("body").addClass("active");
		$(".fixed-navbar-menu-mobile").addClass("active");
	});
	$(".fixed-navbar-menu-mobile-close > i").click(function() {
		$("body").removeClass("active");
		$(".fixed-navbar-menu-mobile").removeClass("active");
	});
	$(".menu-listing-mobile > li > i").click(function() {
		$(".sub-menu-listing-mobile").slideToggle();
	});
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
});