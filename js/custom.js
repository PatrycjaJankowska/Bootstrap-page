$(document).ready(function(){

	// Top slider
	$('#top-slider').carousel({
		interval: 4000
	});
	// Promo slider
	$('#promo-slider').carousel({
		interval: 3000
	});
	// Menu mobilne
	mobileMenu();
	// odliczanie
	$('.timer').countTo();
    
    
    // Scrollr
	var s = skrollr.init({forceHeight: false});

   $('#ppp').countdown({ 
    until: new Date(2017, 8 - 1, 26, +16)});
	
	

});

// Scroll dla naglowka
$(window).bind('scroll', function(event) {
	if($(window).scrollTop() > 20) {
		$('.main-header').addClass('header-short');
		$('.main-logo img').css('max-height', 28);
	} else {
		$('.main-header').removeClass('header-short');
		$('.main-logo img').css('max-height', 42);
	}
});

// Menu mobilne
function mobileMenu() {
	$('#mobile-icon').bind('click', function(event) {
		event.preventDefault();
		$('#main-nav-mobile').show();
	});
	$('#mobile-close').bind('click', function(event) {
		event.preventDefault();
		$('#main-nav-mobile').hide();
	});
}