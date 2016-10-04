$(document).ready(function() {
	//Plugin slick 
	$('.header-slider').slick({
	  dots: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  swipeToSlide: true,
	  pauseOnHover: false,
	  autoplaySpeed: 2500,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
		  }
		},
		{
		  breakpoint: 931,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
	//Arrows
	$(this).find("button").hide();
	$(".slick-slider").hover(function(){
		$(this).find("button").show(400);
	},function(){
		$(this).find("button").hide(400);	
	});
	//End of slick	
});  

