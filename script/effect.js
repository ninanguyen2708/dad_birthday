$(document).ready(function() {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');

    var vw = $(window).width() / 2; // Initialize here and update on resize

    $(window).resize(function() {
        vw = $(window).width() / 2; // Update the viewport width
    });

    $('#turn_on').click(function() {
        const bulbs = ['yellow', 'red', 'blue', 'green', 'pink', 'orange'];
        bulbs.forEach(function(color) {
            $('#bulb_' + color).addClass('bulb-glow-' + color);
        });
        $('body').addClass('peach');
        $(this).fadeOut('slow', function() {
            var audio = $('.song')[0];
            audio.play();
            setTimeout(initiateBannerComing, 1000);
        });
    });

    function initiateBannerComing() {
        $('#bannar_coming').fadeIn('slow', function() {
            $('.bannar').addClass('bannar-come');
            setTimeout(startBalloonsAndOtherAnimations, 3000);
        });
    }

    function startBalloonsAndOtherAnimations() {
        $('#balloons_flying').fadeIn('slow', function() {
            $('.balloon-border').animate({top: -500}, 8000);
            startBalloonLoops();
            setTimeout(startCake, 3000);
        });
    }

    function startCake() {
        $('#cake_fadein').fadeIn('slow', function() {
            $('.cake').fadeIn('slow');
            setTimeout(lightCandleAndDisplayMessages, 2000);
        });
    }

    function lightCandleAndDisplayMessages() {
        $('#light_candle').fadeIn('slow', function() {
            $('.fuego').fadeIn('slow', function() {
                setTimeout(displayWishMessage, 1000);
            });
        });
    }

    function displayWishMessage() {
        $('#wish_message').fadeIn('slow');
    }

    function startBalloonLoops() {
        loopBalloon('b1');
        loopBalloon('b2');
        loopBalloon('b3');
		loopBalloon('b4');
		loopBalloon('b5');
		loopBalloon('b6');
		loopBalloon('b7');
		loopBalloon('b8');
		loopBalloon('b9');
    }

    function loopBalloon(balloonId) {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#' + balloonId).animate({left: randleft, bottom: randtop}, 10000, function() {
            loopBalloon(balloonId);
        });
    }

	$('#wish_message').click(function(){
		vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b9').attr('id','b99')
		$('#b11').animate({top:240, left: vw-500},500);
		$('#b22').animate({top:240, left: vw-400},500);
		$('#b33').animate({top:240, left: vw-300},500);
		$('#b44').animate({top:240, left: vw-100},500);
		$('#b55').animate({top:240, left: vw},500);
		$('#b66').animate({top:240, left: vw+180},500);
		$('#b77').animate({top:240, left: vw+280},500);
		$('#b88').animate({top:240, left: vw+380},500);
		$('#b99').animate({top:240, left: vw+480},500);
        $('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(500);
		$(this).fadeOut('slow').promise().done(function(){
			setTimeout($('#story').fadeIn('slow'), 3000);
		});
	});
});
