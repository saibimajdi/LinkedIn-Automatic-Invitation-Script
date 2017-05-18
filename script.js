var screenHeight = window.outerHeight - 10;

// change if you have a bad network connection
var timeBetweenTwoRequest = 200; // 0.2 seconds
var timeToScrollAndLoadNewRequests = 5000; // 5 seconds

setInterval(function(){
	
    scrollBy(0, screenHeight);
    $('.mn-person-card__person-btn-ext').each(function(){  
	setTimeout(function(){ $(this).click(); }, timeBetweenTwoRequest);
	console.log('invitation sent'); 
    }); 
	
	$('.mn-pymk-list__action-container > .button-secondary-small').each(function(){  
	setTimeout(function(){ $(this).click(); }, timeBetweenTwoRequest);
	console.log('invitation sent'); 
    });
		
}, timeToScrollAndLoadNewRequests);
