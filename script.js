var screenHeight = window.outerHeight - 10;

// change if you have a bad network connection
var timeBetweenTwoRequest = 200; // 0.2 seconds
var timeToScrollAndLoadNewRequests = 3000; // 3 seconds
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
        // UI 1
        $('.mn-person-card__person-btn-ext').each(function(){  
            //setTimeout(function(){ $(this).click(); }, timeBetweenTwoRequest);
            $(this).click();
            console.log('invitation sent'); 
        }); 

        // UI 2
        $('.mn-pymk-list__action-container > .button-secondary-small').each(function(){  
            //setTimeout(function(){ $(this).click(); }, timeBetweenTwoRequest);
            $(this).click();
            console.log('invitation sent'); 
        });

    requests = 0;
    }, timeToScrollAndLoadNewRequests * 3);
}, timeToScrollAndLoadNewRequests * 3);