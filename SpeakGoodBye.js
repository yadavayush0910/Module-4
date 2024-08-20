(function(window) {
    var speakWord = "Good Bye";
    var byeSpeaker = function (name) {
        console.log(speakWord + " " + name);
    }
    
    window.byeSpeaker = byeSpeaker;

})(window);

// You can now use byeSpeaker globally:
byeSpeaker("John");  // Logs: "Good Bye John"
