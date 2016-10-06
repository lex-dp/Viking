$(document).ready(function() {

	var hash = location.hash; 
	$(window).load(function () {
    $('html, body').animate({scrollTop: $(hash + ' .scroll').offset().top}, 100);
      return false;});

});  

