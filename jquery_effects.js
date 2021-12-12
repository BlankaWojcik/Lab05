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

    $("#button_1").click(function() {
        $("p").slideDown();
    }); 
    $("#button_2").click(function() {
        $("p").slideUp();
    }); 
    $("#button_3").click(function() {
        $("p").slideToggle();
    }); 

    $("#button_69").click(function() {
        var div = $("square_01");
        div.animate({height:'400px', opacity: '0.3'}, "slow");
        div.animate({width:'350px', opacity: '0.7'}, "slow");
        div.animate({height:'50px', opacity: '0.9'}, "slow");
        div.animate({width:'500px', opacity: '0.4'}, "slow");
        div.animate({height:'400px', opacity: '0.5'}, "slow");
        div.animate({height:'300px', opacity: '0.9'}, "slow");
    }); 








});