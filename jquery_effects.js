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
        var div = $("div");
        div.animate({height:'400px', opacity: '0.3'}, "slow");
        div.animate({width:'350px', opacity: '0.7'}, "slow");
        div.animate({height:'50px', opacity: '0.9'}, "slow");
        div.animate({width:'500px', opacity: '0.4'}, "slow");
        div.animate({height:'400px', opacity: '0.5'}, "slow");
        div.animate({height:'300px', opacity: '0.9'}, "slow");
    }); 

 $("#button_420").click(function() {
        $("#square_01").slideDown(5000);
    }); 
    $("#button_420").click(function() {
        $("#square_01").stop();
    }); 

$("#button_123").click(function() {
    $("#square_01").slideDown(5000).css("color", "blue").slideUp(1000);
}); 
$("#button_1234").click(function() {
    $("#square_01").slideDown(3000).css("color", "pink").slideUp(4000).css("color", "red");
}); 
$("#button_12345").click(function() {
    $("#square_01").slideUp(2000).css("color", "green").slideDown(3000).css("color", "red");
}); 


});