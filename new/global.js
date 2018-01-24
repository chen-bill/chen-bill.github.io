$(document).ready(function(){
  $('#resumeButton').mouseover(function() {
    var newSrc;
    if ($('#resumeFace').css("right") == "-150px"){
      newSrc = $('#resumeFace').attr("src").match(/[^\.]+/).input.replace('sad','happy');
      $('#resumeFace').attr("src",newSrc).animate({"right": '0px'}, 200);
    }
  });

  $('#resumeButton').mouseout(function() {
    var newSrc;
    if ($('#resumeFace').css("right") == "0px"){
      newSrc = $('#resumeFace').attr("src").match(/[^\.]+/).input.replace('happy','sad');
      $('#resumeFace').attr("src", newSrc).animate({"right": '-150px'}, 500);
    }
  });
});
