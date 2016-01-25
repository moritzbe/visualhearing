$(document).ready(function(){

	$( "#recordButton" ).click(function() {
	  //$(this).hide();
	  $('ul.navbar-text').hide();
	  $('#visible-wrapper').removeClass('hide').addClass('show');
	  $('#arrow, #textbox').removeClass('hide').addClass('show');

	});



	$('.transbox').click(function () {
	    $('#toggler').toggleClass("transbox2 transbox1");
	    $('#startview').toggleClass("hide show");
	    $('#arrow').toggleClass("hide show");
	    $('#arrow').toggleClass("show move_left_up");
	    $('#textbox').toggleClass("hide show");
	    $('#textbox').toggleClass("show move_textbox");
	});

	$('.transbox').click(function () {
	    
	});

	setInterval(function() {
		var $resultsText = $('#resultsText'),
			text = $resultsText.val(),
			words = text.split(" "),
			wordsToShow = words.slice(Math.max(words.length - 10, 0), words.length);
		$("#textbox").html(wordsToShow.join(" ")); 
	}, 500);
});