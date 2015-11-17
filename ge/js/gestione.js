$(function() {	
	$(document).ready(
		function() {
			// Initialize Tooltip
			  $('[data-toggle="tooltip"]').tooltip(); 
			  
			  // Add smooth scrolling to all links in navbar + footer link
			  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
				  scrollTop: $(hash).offset().top
				}, 900, function(){
			   
				  // Add hash (#) to URL when done scrolling (default click behavior)
				  window.location.hash = hash;
				});
			  });

		}
	);
	$("body").on("mouseenter",".CLSpowered", function() {
		var testo = "powered by<br /><a target=\"_blank\" href=\"mailto:marco.cazzaro.0@gmail.com\">Marco Cazzaro</a>";
		$(".CLSpoweredtesto").hide().html(testo).show(500);
		$(this).toggleClass("CLSpoweredgrande", 700);
	});
	$("body").on("mouseleave",".CLSpowered", function() {
		var testo = "?";
		$(".CLSpoweredtesto").hide(100).show(300).text(testo);
		$(this).toggleClass("CLSpoweredgrande", 500);
	});
	$('.navbar-collapse').click('li', function() {
		$('.navbar-collapse').collapse('hide');
	});
});

