$(document).ready(function() {
  // Header JS
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 40) {
	    $("header").addClass("active");
	   } else {
	    $("header").removeClass('active');
	   }
	});
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
});