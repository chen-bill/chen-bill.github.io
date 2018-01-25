$(function(){

	var animationSpeed = 1000;
	var pause = 2000;
	var currentSlide = 0;
	var slidingImages = 3;

	//cache DOM
	var $slider = $('.printedImagesSlider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	var interval;

	function startSlider(){
		//setInterval => runs a 'function' every 'integer' seconds
		interval = setInterval(function(){
			$slideContainer.animate({'margin-left': '-=100%'}, animationSpeed, function(){
				currentSlide++;
				// console.log($slideContainer.length);
				if (currentSlide === $slideContainer.length*slidingImages){
					currentSlide = 0;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function pauseSlider(){
		clearInterval(interval);
	}

	$slides.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

	startSlider();

});