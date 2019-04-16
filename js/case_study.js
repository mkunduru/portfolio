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

	$('.next-project-slides').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<img alt="Left Arrow" class="slick-prev img-left" src="img/left_arrow.png">',
		nextArrow: '<img alt="Right Arrow" class="slick-next img-right" src="img/right_arrow.png">'
	});
});