$(document).ready(function(){
	$('span.smallNavButton').click(function () {
		$('#navItems').slideToggle();
	});

	$(window).resize(function (){
		if( $(window).width() > 890) {
			$('#navItems').removeAttr('style');
		}
	});

    $('#resumeButton').mouseover(function() {
        var newSrc;
        if ($('#resumeFace').css("left") == "-200px"){
            newSrc = $('#resumeFace').attr("src").match(/[^\.]+/).input.replace('sad','happy');
            $('#resumeFace').attr("src",newSrc).animate({"left": '0px'}, 200);
        }
    });

    $('#resumeButton').mouseout(function() {
        var newSrc;
        if ($('#resumeFace').css("left") == "0px"){
            newSrc = $('#resumeFace').attr("src").match(/[^\.]+/).input.replace('happy','sad');
            $('#resumeFace').attr("src", newSrc).animate({"left": '-200px'}, 500);
        }
    });
});
