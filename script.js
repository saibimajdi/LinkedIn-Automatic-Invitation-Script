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

<<<<<<< HEAD
        // UI 2
        $('.mn-pymk-list__action-container > .button-secondary-small').each(function(){  
            //setTimeout(function(){ $(this).click(); }, timeBetweenTwoRequest);
            $(this).click();
            console.log('invitation sent'); 
        });
=======
         $('.mn-pymk-list__action-container > .button-secondary-small').each(function(){  
             //setTimeout(function(){ $(this).click(); }, timeBetweenTwoRequest);
             $(this).click();
             //$(this).removeClass('button-secondary-small');
             console.log('invitation sent'); 
         });
>>>>>>> 5d32456ded719db84a90a3b4aab8f2dc1a767e65

    requests = 0;
<<<<<<< HEAD
    }, timeToScrollAndLoadNewRequests * 3);
}, timeToScrollAndLoadNewRequests * 3);
=======
}, timeToScrollAndLoadNewRequests * 5);
>>>>>>> 5d32456ded719db84a90a3b4aab8f2dc1a767e65
