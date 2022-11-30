$(document).ready(function () {
    
    $('#plantgif').click(function(){
        $('#ptxt').toggle();
     });

  
  $('#keyboard').click(function () {
//  $('.infopanel').toggle(2000);     
        $(this).toggleClass("big");
    });
    
    

  $( ".hoverButton" ).mouseover(function() { 
    $(".HoverState").hide();
    $(this).next().show();
});
  $( ".hoverButton" ).mouseout(function() {
    $(".HoverState").hide();
});
    
    
    
    
        $('.box1').hover(function () {
        $('.box1').hide();
    }, function () {
        $('.box1').show();
    });


    
    

    

    
    
    
    
    
    
});






