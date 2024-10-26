$(document).ready(function() {
	// Accordion JS
	$('.faq-accordion-heading.active + .faq-accordion-body').slideDown(700);
	$(".faq-accordion-heading").click(function(e){
		e.preventDefault();
		if ($(".faq-accordion-body").is(":visible")) {
			$(".faq-accordion-body").slideUp(700);
			$(".faq-accordion-heading").removeClass("active");
		}
    if( $(this).next(".faq-accordion-body").is(":visible")){
        $(this).next(".faq-accordion-body").slideUp(700);
        $(".faq-accordion-heading").removeClass("active");
    }	else {
        $(this).next(".faq-accordion-body").slideDown(700); 
       	$(this).addClass("active");
    }
	});
});