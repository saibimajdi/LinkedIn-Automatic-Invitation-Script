
setInterval(function(){
	
    scrollBy(0, window.outerHeight - 10);
    $('.mn-person-card__person-btn-ext').each(function(){  
	setTimeout(function(){ $(this).click(); }, 200);
	console.log('invitation sent'); 
    }); 
		
}, 5000);
