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
            //$(this).removeClass('mn-person-card__person-btn-ext');
            console.log('invitation sent'); 
        }); 

         $('.mn-pymk-list__action-container > .button-secondary-small').each(function(){  
             //setTimeout(function(){ $(this).click(); }, timeBetweenTwoRequest);
             $(this).click();
             //$(this).removeClass('button-secondary-small');
             console.log('invitation sent'); 
         });

    }, timeToScrollAndLoadNewRequests * 5);
    requests = 0;
}, timeToScrollAndLoadNewRequests * 5);
