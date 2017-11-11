// execute this script after the page is loaded
window.onload = function() {
// e = event
    window.addEventListener("keydown", function(e) {
        const audio = document.querySelector("audio[data-key='" + e.keyCode + "']");
        const allKeys = document.querySelectorAll("div[data-key='" + e.keyCode + "']");
        //if there is no audio stop the fuction
        if (!audio) {
            return false;
        } 
        //else play audio
        audio.play();
        
       allKeys.forEach(key => key.classList.add("playing"));
        
    });

function removeTransition(e) {
    // skip it if it is not a transform

    this.classList.remove("playing");
};

var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
    
    
   
  
};