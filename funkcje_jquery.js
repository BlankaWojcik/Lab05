$(document).ready(function() {
    $("#button_01").click(function() {
      $("p").hide();
    });
    $("#button_02").click(function() {
        $("#p_03").hide();
      });


      $("#button_001").click(function() {
        $("ul li:first").hide(speed, 500);
      });
      $("#button_002").click(function() {
        $(":button").hide();;
      });
      $("#button_003").click(function() {
        $("li:even").hide();;
      });
      $("#button_004").click(function() {
        $("li:odd").hide();
      });

});
