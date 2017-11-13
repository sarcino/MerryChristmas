// execute this script after the page is loaded
window.onload = function() {
// e = event
    window.addEventListener("keydown", function(e) {
        // play the number of the keyboard
     play(e.keyCode); 
    });

var keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("click", function(e) {
        play(this.getAttribute('data-key'));
    });
   });
};

function play(song) {
   const audio = document.querySelector("audio[data-key='" + song + "']");
        const allKeys = document.querySelectorAll("div[data-key='" + song + "']");
        //if there is no audio stop the fuction
        if (!audio) {
            return false;
        } 
        //else play audio
        audio.play();
        
       allKeys.forEach(key => key.classList.add("playing")); 
}

function removeTransition(e) {
    // skip it if it is not a transform
    this.classList.remove("playing");
};