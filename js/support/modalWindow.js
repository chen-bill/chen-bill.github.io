$(document).keydown(function(e) {
    if(e.which == 13 || e.which == 27) {
        $('#mask, .modal').fadeOut(200, function(){});
    }
});

$(document).ready(function(){

	$('a.triggerModal').click(function () {
		var modal = $(this).attr('href');
		$(modal).fadeIn(200);
		$("#mask").fadeIn(200);
		$(".content").attr("overflow","hidden");
	});

	$('#mask, .modalClose').click(function () {
		$('#mask, .modal').fadeOut(200, function(){});
	});
});