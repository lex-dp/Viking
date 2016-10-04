$(document).ready(function() {

	
	
	$("#tabbedPanel").tabs({
		active: 1,		
		event: "mouseover"
	});
	
	$("#tabbedPanelCallery , #prices").tabs({
		beforeActivate : function(evt) {
			location.hash=$(evt.currentTarget).attr('href');
		}
	});
	var hash = location.hash; 
    if (hash) { 
		$('#tabbedPanelCallery').tabs("load", hash);
		
	} 
	

	

	

	$( window ).resize(function() {
		var $width = $(window).width();
		console.log($width);
	});
	
	
});  

