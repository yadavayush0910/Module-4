(function(window) {
    var speakWord = "Hello";
    var helloSpeaker = function(name) {
        console.log(speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;

})(window);

// You can now use helloSpeaker globally:
helloSpeaker("Alice");  // Logs: "Hello Alice"
