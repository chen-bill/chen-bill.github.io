if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
  $(document).ready(function(){

    $('#resumeButton').mouseover(function() {
      var newSrc;
      console.log(parseInt($('#resumeFace').css("right")));
      if (parseInt($('#resumeFace').css("right")) >= -150){
        newSrc = $('#resumeFace').attr("src").match(/[^\.]+/).input.replace('sad','happy');
        $('#resumeFace').clearQueue()
        $('#resumeFace').attr("src",newSrc).animate({"right": '0px'}, 200);
      }
    });

    $('#resumeButton').mouseout(function() {
      console.log(parseInt($('#resumeFace').css("right")));
      var newSrc;
      if (parseInt($('#resumeFace').css("right")) <= 0){
        newSrc = $('#resumeFace').attr("src").match(/[^\.]+/).input.replace('happy','sad');
        $('#resumeFace').attr("src", newSrc).animate({"right": '-150px'}, 500);
      }
    });

    $('#contact').click(function(){
      $('#emailNotification').clearQueue();
      var copyText = document.getElementById("email");
      copyText.select();
      document.execCommand("Copy");

      $('#emailNotification').fadeIn(100).delay(1500).fadeOut(100);
    })
  });
}
