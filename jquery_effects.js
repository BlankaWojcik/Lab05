$(document).ready(function() {
    $("#button_01").click(function() {
      $("div").fadeIn();
    });

    $("#button_02").click(function() {
        $("div").fadeOut();
    });

    $("#button_03").click(function() {
        $("div").fadeToggle();
    }); 

    $("#button_04").click(function() {
        $("div").fadeTo(0.6);
    });  

});