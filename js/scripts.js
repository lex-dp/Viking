$(document).ready(function() {

	
	
	$("#tabbedPanel").tabs({
		active: 1,		
		event: "mouseover"
	});
	
	$("#tabbedPanelCallery , #prices , #rules").tabs({
		beforeActivate : function(evt) {
			location.hash=$(evt.currentTarget).attr('href');
		}
	});
	var hash = location.hash; 
    if (hash) { 
		$('#tabbedPanelCallery').tabs("load", hash);
	} 
	
	$("#rules #accordion").accordion({
    heightStyle: "content",active: false,
    activate: function( event, ui ) {
        if(!$.isEmptyObject(ui.newHeader.offset())) {
            $('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top }, 'slow');
        }
    }
	});

});  

