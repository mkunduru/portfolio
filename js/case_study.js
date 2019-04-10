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
		before: function(index, sections){
			if(index == 1) {
				$('.menu-nav').removeClass('no-border');
			}
			else {
				$('.menu-nav').addClass('no-border');
			}
		}
	});
});