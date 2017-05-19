var screenHeight = window.outerHeight - 10;

// change if you have a bad network connection
var timeBetweenTwoRequest = 200; // 0.2 seconds
var timeToScrollAndLoadNewRequests = 3000; // 5 seconds
var requests = 0;


setInterval(function(){
	
    scrollBy(0, screenHeight);
    requests += 1;

    if(requests > 5){
        console.log("STOPED");
        return;
    }
		
}, timeToScrollAndLoadNewRequests);



setTimeout(function(){
    setInterval(function(){
        $('.mn-person-card__person-btn-ext').each(function(){  
            //setTimeout(function(){ $(this).click(); }, timeBetweenTwoRequest);
            $(this).click();
            console.log('invitation sent'); 
        }); 
    }, timeToScrollAndLoadNewRequests * 5);
}, timeToScrollAndLoadNewRequests * 5);