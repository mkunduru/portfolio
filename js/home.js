var currentMenu = "intro";

$(document).ready(function(){

	$(window).resize(function(){
		if($(window).width() < 960) {
			$.scrollify.disable();
		} else {
			if($.scrollify.isDisabled()) {
				$.scrollify.enable();
			}
			$.scrollify.update();
		}
	});

	$.scrollify({
		section: ".scroll-section",
		scrollSpeed: 1200,
		setHeights: false,
		before: function(index, sections){
			var object = sections[index];
			var menuItem = object.data('menu');
			if(currentMenu != menuItem) {
				$('nav li').removeClass('selected');
			};
			$('#'+menuItem).addClass('selected');

			if(index == 1) {
				if($('.slide.is-visible').length == 0){
					$('.slider-nav li').eq(0).addClass('is-visible');
					moveToSlide(0);
				}
			}
		},
		afterResize: function() {
			$.scrollify.update();
		},
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

	$('nav li, .logo').click(function(){
		redirectSection = $(this).data('redirect');
		$.scrollify.move('#'+redirectSection);
	});


	$('.slider-nav li').click(function(){
		slideNum = $('.slider-nav li').index(this);
		$('.slide.is-visible').removeClass('is-visible');
		$('.slider-nav li.is-visible').removeClass('is-visible');
		$('.slider-nav li').eq(slideNum).addClass('is-visible');
		
		setTimeout(function(){
			moveToSlide(slideNum);
		}, 1400);
	});

	section = $.urlParam('section');
	if(section != null) {
		setTimeout(function(){
			$.scrollify.move('#'+section);
		}, 200);
	}
});

function moveToSlide(index) {
	$('.slider .slide').eq(index).addClass('is-visible');
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}