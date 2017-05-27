// https://www.youtube.com/watch?v=uh84Asy2W4s

function clickEvent(e){

    

    chrome.tabs.executeScript(null, {
        code :`
        var requests = 0;
        var invitationCount = 0;

        setInterval(function(){
            scrollBy(0, window.outerHeight);
        }, 1000);

        setTimeout(function(){
            setInterval(function(){
                var invitationButtons = document.getElementsByClassName('mn-person-card__person-btn-ext');
                if(invitationButtons.length == 0) return invitationCount;
                for(var index = 0; index < invitationButtons.length - 1; index++){
                    invitationButtons[index].click();
                    console.log('invitation sent');
                    invitationCount++;
                }
            }, 5000);
        }, 4000);
               `
    }, function(res){
        console.log(res);
    });
}

document.addEventListener('DOMContentLoaded', function(){

    var buttons = document.querySelectorAll('button');

    for(var index = 0; index < buttons.length; index++){
        buttons[index].addEventListener('click', clickEvent);
    }

    

});