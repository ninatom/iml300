$(document).ready(function () {
    $(function () {
        $("#mars").draggable();
        $("#hersheys").draggable();
        $("#crunch").draggable();
    });
    $('button').click(function () {
        $('.announcement').toggle();
    });
    $(".hoverButton").mouseover(function () {
        $(".HoverState").hide();
        $(this).next().show();
    });
    $(".hoverButton").mouseout(function () {
        $(".HoverState").hide();
    });
    $('#box1').hover(function () {
        $('#box1').hide();
    }, function () {
        $('#box1').fadeIn();
    });
    $('#box2').hover(function () {
        $('#box2').hide();
    }, function () {
        $('#box2').fadeIn();
    });
    $('#box3').hover(function () {
        $('#box3').hide();
    }, function () {
        $('#box3').fadeIn();
    });
    $('#box4').hover(function () {
        $('#box4').hide();
    }, function () {
        $('#box4').fadeIn();
    });
    $('#box5').hover(function () {
        $('#box5').hide();
    }, function () {
        $('#box5').fadeIn();
    });
    $('#box6').hover(function () {
        $('#box6').hide();
    }, function () {
        $('#box6').fadeIn();
    });

    $('#box7').hover(function () {
        $('#box7').hide();
    }, function () {
        $('#box7').fadeIn();
    });
    $('#box8').hover(function () {
        $('#box8').hide();
    }, function () {
        $('#box8').fadeIn();
    });
    $('#box9').hover(function () {
        $('#box9').hide();
    }, function () {
        $('#box9').fadeIn();
    });
    $('#box10').hover(function () {
        $('#box10').hide();
    }, function () {
        $('#box10').fadeIn();
    });
    $('#box11').hover(function () {
        $('#box11').hide();
    }, function () {
        $('#box11').fadeIn();
    });
    $('#box12').hover(function () {
        $('#box12').hide();
    }, function () {
        $('#box12').fadeIn();
    });
    $('#box13').hover(function () {
        $('#box13').hide();
    }, function () {
        $('#box13').fadeIn();
    });
    $('#box14').hover(function () {
        $('#box14').hide();
    }, function () {
        $('#box14').fadeIn();
    });
    $('#box15').hover(function () {
        $('#box15').hide();
    }, function () {
        $('#box15').fadeIn();
    });
    $('#box16').hover(function () {
        $('#box16').hide();
    }, function () {
        $('#box16').fadeIn();
    });
});
