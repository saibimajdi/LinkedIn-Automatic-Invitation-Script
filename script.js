
window.location.href = "https://www.linkedin.com/mynetwork/";

setInterval(function(){
	
    scrollBy(0, window.outerHeight - 10);
	
		$('.mn-person-card__person-btn-ext').each(function(index, item){  
            //console.warn(val + ": " + index);
			setTimeout(function(){ $(this).click(); }, 200);
            //var person = document.getElementsByClassName('mn-person-info__name')[index].innerText;
			console.log('invitation sent'); 
		}); 
		
}, 5000);