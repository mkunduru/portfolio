$(document).ready(function(){
	$('.popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		},
		zoom : {
			enabled: true,
			duration: 300
		}
	});

	$.scrollify({
		section: ".scroll-section",
		scrollSpeed: 1200,
		after: function(index, sections) {
			if(index != 0) {
				$('.scroll-line').removeClass('buzz');
			}
			else {
				setTimeout(function(){
					$('.scroll-line').addClass('buzz');
				}, 2000)
			}
		}
	});
});

$(window).on("load", function(){
	console.log("Window is loaded and slideshow is joined at the bottom");
	
	setTimeout(function(){
		slideshow = $('.case-study-slideshow').detach();
		slideshow.appendTo('.container');

		$('.next-project-slides').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<img alt="Left Arrow" class="slick-prev img-left" src="img/left_arrow.png">',
			nextArrow: '<img alt="Right Arrow" class="slick-next img-right" src="img/right_arrow.png">'
		});
	}, 2000);
});