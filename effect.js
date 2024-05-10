$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7, #b8, #b9').stop();
			$('#b11').animate({top:240, left: vw-400},500);
			$('#b22').animate({top:240, left: vw-300},500);
			$('#b33').animate({top:240, left: vw-200},500);
			$('#b44').animate({top:240, left: vw-80},500);
			$('#b55').animate({top:240, left: vw+10},500);
			$('#b66').animate({top:240, left: vw+180},500);
			$('#b77').animate({top:240, left: vw+280},500);
			$('#b88').animate({top:240, left: vw+380},500);
			$('#b99').animate({top:240, left: vw+480},500);
		});

		$('#turn_on').click(function() {
			const bulbs = ['yellow', 'red', 'blue', 'green', 'pink', 'orange'];
			bulbs.forEach(function(color) {
				$('#bulb_' + color).addClass('bulb-glow-' + color);
			});
			$('body').addClass('peach');
			$(this).fadeOut('slow').delay(1000).promise().done(function() {
				$('#play', function() {
					var audio = $('.song')[0];
					audio.play(); // playing the audio
				});
			});
		
			setTimeout(initiateBannerComing, 1000);
		});
	
		function initiateBannerComing() {
			$('#bannar_coming').fadeIn('slow', function() {
				$('.bannar').addClass('bannar-come');
				// Set the next function to be called after another 3 seconds
				setTimeout(startBalloonsAndOtherAnimations, 3000);
			});
		}
	
		function startBalloonsAndOtherAnimations() {
			$('#balloons_flying').fadeIn('slow', function() {
				$('.balloon-border').animate({top: -500}, 8000);
				startBalloonLoops();
				// Set the next function to be called after another 3 seconds
				startCake();
			});
		}
	
		function startCake() {
			$('#cake_fadein').fadeIn('slow', function() {
				$('.cake').fadeIn('slow');
				// Set the next function to be called after another 3 seconds
				setTimeout(lightCandleAndDisplayMessages, 2000);
			});
		}
	
		function lightCandleAndDisplayMessages() {
			$('#light_candle').fadeIn('slow', function() {
				$('.fuego').fadeIn('slow', function() {
					// Set the next function to be called after another 3 seconds
					displayWishMessage();
				});
			});
		}
	
		function displayWishMessage() {
			$('#wish_message').fadeIn('slow');
		}

    function startBalloonLoops() {
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
		loopEight();
		loopNine();
    }
	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}

	function loopNine() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b9').animate({left:randleft,bottom:randtop},10000,function(){
			loopNine();
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
		$('#b11').animate({top:240, left: vw-500},200);
		$('#b22').animate({top:240, left: vw-400},200);
		$('#b33').animate({top:240, left: vw-300},200);
		$('#b44').animate({top:240, left: vw-100},200);
		$('#b55').animate({top:240, left: vw},200);
		$('#b66').animate({top:240, left: vw+180},200);
		$('#b77').animate({top:240, left: vw+280},200);
		$('#b88').animate({top:240, left: vw+380},200);
		$('#b99').animate({top:240, left: vw+480},200);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(500);
		$(this).fadeOut('slow').promise().done(function(){
			setTimeout($('#story').fadeIn('slow'), 3000);
		});
	});
});
