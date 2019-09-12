//= jquery.magnific-popup.min.js
//= owl.carousel.min.js
//= max-word.js
//= select.js
//= jquery.validate.min.js

// window.onload = function(){
// 	// $("body").toggleClass('opacity');
// 	$("#overlayer").delay(1000).fadeOut("slow");
// 	overlay.toggle();
// 	setTimeout(function() {
// 		overlay.toggle();
// 	}, 800);
// }

// limited text
wordlimit('max-text', 16, true);
wordlimit('max-text--big', 18, true);
wordlimit('care-text-desc', 10, true);

// $('.care, .steps').on('mousemove', function(e){
//   var centerGorizontal = $(this).width()/2;
//   var centerVertical = $(this).height()/2;

//   var resultHover1 = centerGorizontal - e.offsetX;
//   var resultHover2 = centerVertical - e.offsetY;

//   $(this).css({
//     'transform':'perspective(800px) rotateY(' + resultHover1/20 +'deg) rotateX(' + resultHover2/20 +'deg)'
//   })
// });
// $('.care, .steps').on('mouseout', function(e){
// 	$(this).css({
//     'transform':'perspective(800px) rotateY(' + 0 +'deg) rotateX(' + 0 +'deg)'
//   })
// });

$(".accordeon dd").hide().prev().click(function() {
	$(this).parents(".accordeon").find("dd").not(this).slideUp(250).prev().removeClass("active");
	$(this).next().not(":visible").slideDown(250).prev().addClass("active");
});
if($(".accordeon dt").hasClass('active')) {
	// $(".accordeon dt.active").next('dd').not(":visible").slideDown(250);
}



$('.star-wrapper .star-article').on('click', function(){
	$('.star-wrapper .star-article').removeClass('is-active');
	$(this).addClass('is-active');
});

var careSelect = function() {
	$(".search-list--item ul").hide();
	$(".search-list--item h6").click(function(){
		$(this).toggleClass("is-active").next().slideToggle(300);
	});
	window.onresize = function(event) {
		$(".search-list--item h6").removeClass("is-active")
	};
	$(".list-city ul").hide();
	$(".list-city .select-city").click(function(){
		$(this).toggleClass("is-active").next().slideToggle(300);
	});
	window.onresize = function(event) {
		$(".list-city .select-city").removeClass("is-active")
	};
};

var mediaQuery = function() {
	var dropContainer = $('.credit-card--drop');
	var mq = matchMedia('(max-width: 540px)');
	var handler = function(e) {

		if (e.matches) {
			careSelect();
		} else {
			$(".search-list--item h6").unbind('click');
			$(".search-list--item ul").css({"display":"flex"});
			$(".list-city .select-city").unbind('click');
			$(".list-city ul").css({"display":"flex"});
		}
	};
	mq.addListener(handler);
	handler(mq);
};
mediaQuery();

$(window).scroll(function() {
	if ($(this).scrollTop() > 185){  
		$('header').addClass("sticky-one");
		$('.header-line--wrapper').addClass("sticky-logo1");
	}
	else{
		$('header').removeClass("sticky-one");
		$('.header-line--wrapper').removeClass("sticky-logo1");
	}
	if ($(this).scrollTop() > 250){  
		$('header').addClass("sticky-two");
		$('.header-line--wrapper').addClass("sticky-logo2");
	}
	else{
		$('header').removeClass("sticky-two");
		$('.header-line--wrapper').removeClass("sticky-logo2");
	}
});

$(".menu-open").on("click", function() {  
	$(this).toggleClass('is-active');
	$(".menu-mobile--hide").toggleClass('is-active');
	$("body").toggleClass('overflow');
});

var mobileAccorderon = function(){
	$('.menu-mobile--list li span').on("click", function(){
		$(this).toggleClass('is-active').parent().find('.sub-menu-mobile').slideToggle(300);
		// $(this).toggleClass('is-active');
	});
	// $('.menu-mobile--list li:first span').addClass('is-active').parent().find('.sub-menu-mobile').show();
};
mobileAccorderon();

// $(".burger-menu").on("click", function() {  
// 	$(".menu-header").toggleClass('is-active');
// 	$("body").toggleClass('overflow');
// })

/* Popup Window */

$(".popup").magnificPopup({
	type: 'inline',
	removalDelay: 300,
	mainClass: 'my-mfp-slide-bottom'
});
$(document).on('click', '.custom-close', function (e) {
	e.preventDefault();
	$.magnificPopup.close();
});

/* Popup Window End */

function heightFooter(){
	var heightFoot = $('.footer').outerHeight();
	$('body').css({ 'padding-bottom': heightFoot});
}
heightFooter()
$( window ).resize(function() {
	heightFooter()
});

// Slider

var sliderStart = function(){

	var buttonIcon = ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><g transform="rotate(-90 10 10)"><g><path fill="#54bbbf" d="M10 18.662c-4.775 0-8.66-3.885-8.66-8.66s3.885-8.66 8.66-8.66c4.776-.001 8.66 3.884 8.66 8.66.001 4.773-3.884 8.66-8.66 8.66zM10 0C4.479 0 0 4.477 0 10c-.001 5.524 4.476 10 10 10s10-4.477 10-10c.001-5.523-4.476-10-10-10z"/></g><g><path fill="#54bbbf" d="M13.592 7.829l-3.927 3.928L5.74 7.83a.68.68 0 0 0-.96.96l4.404 4.405a.683.683 0 0 0 .964 0l4.404-4.405a.68.68 0 0 0-.959-.96z"/></g></g></g></svg>'];
	$('.slider-testimonials').owlCarousel({
		center: true,
		items:3,
		loop:true,
		margin:60,
		// nav: false,
		//dots: false,
		autoWidth:true,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		smartSpeed: 700,
		navText: [buttonIcon,buttonIcon],
		dotsContainer: '.wrapper-navigation .slider_dot',
		navContainer: '.wrapper-navigation .slider_nav',
		responsive:{
			720:{
				items:1
			},
			320:{
				items:1,
				margin:60
			}
		}
	});

	$('.slider-carers').owlCarousel({
		center: true,
		items:2,
		loop:true,
		// margin:80,
		// nav: false,
		//dots: false,
		autoWidth:true,
		autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		smartSpeed: 700,
		navText: [buttonIcon,buttonIcon],
		dotsContainer: '.slider-carers-nav .slider_dot',
		navContainer: '.slider-carers-nav .slider_nav',
		responsive:{
			720:{
				items:2
			},
			320:{
				items:1,
				margin:60
			}
		}
	});

};

var sliderCarers = function() {}

var sliderMobile = function(){
	var buttonIcon = ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><g transform="rotate(-90 10 10)"><g><path fill="#54bbbf" d="M10 18.662c-4.775 0-8.66-3.885-8.66-8.66s3.885-8.66 8.66-8.66c4.776-.001 8.66 3.884 8.66 8.66.001 4.773-3.884 8.66-8.66 8.66zM10 0C4.479 0 0 4.477 0 10c-.001 5.524 4.476 10 10 10s10-4.477 10-10c.001-5.523-4.476-10-10-10z"/></g><g><path fill="#54bbbf" d="M13.592 7.829l-3.927 3.928L5.74 7.83a.68.68 0 0 0-.96.96l4.404 4.405a.683.683 0 0 0 .964 0l4.404-4.405a.68.68 0 0 0-.959-.96z"/></g></g></g></svg>'];

	$(document).ready(function() {
	if ( $(window).width() < 855 ) {
		startCarousel();
	} else {
		$('.owl-carousel.owl-mobile').addClass('off');
	}
});

$(window).resize(function() {
		if ( $(window).width() < 855 ) {
			startCarousel();
		} else {
			stopCarousel();
		}
});

function startCarousel(){
	$(".owl-mobile").owlCarousel({
		center: true,
		items:1,
		loop:true,
		margin:40,
		autoWidth:true,
		autoplay:false,
		autoplayTimeout:7000,
		autoplayHoverPause:true,
		smartSpeed: 700,
		navText: [buttonIcon,buttonIcon],
		dotsContainer: '.mobile-navigation .slider_dot',
		navContainer: '.mobile-navigation .slider_nav',
		responsive:{
			320:{
				items:1,
				margin:100
			}
		}
	});
}
function stopCarousel() {
	var owl = $('.owl-mobile');
	owl.trigger('destroy.owl.carousel');
	owl.addClass('off');
}
};

$(document).ready(function(){
	sliderStart();
	sliderMobile();


	// $.ajax({
	// 	type:' GET',
	// 	url:'http://tot91test.digitaltradingco.co.uk/DesktopModules/APIModule/API/addresslookup/SearchPostcodes?search=ИНДЕКС С ПОЛЯ',
	// 	success:function(responsedata){
	// 		if(responsedata != '') {
	// 			валидно
	// 		} else {
	// 			Не волидно
	// 		}
	// 	},
	// 	error: function(data, errorThrown)
	// 	{
	// 		alert(errorThrown);
	// 	}
	// });

});