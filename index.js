function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout (Hello) {
    console.log(Hello.toUpperCase());
}

function logWhisper (Hello) {
    console.log(Hello.toLowerCase());
}

function sayHiToHeadphonedRoommate (string) {
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";
    } 
    
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }

    if ("Let\'s have dinner together!") {
        return "I would love to!";
    }
}