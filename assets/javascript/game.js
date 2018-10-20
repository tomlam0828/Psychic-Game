var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var left = 10;
var yourGuess = [];

var userWin = document.getElementById("user-win");
var userLosses = document.getElementById("user-losses");
var userLeft = document.getElementById("user-left");
var yourGuess = document.getElementById("your-guess");
var winsText = document.getElementById("wins-text");


document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    
        if (userGuess === computerGuess) {
            wins++;
            userWin.textContent = wins;
        } else if (userGuess != computerGuess) {
            losses++;
            left --;
            userLosses.textContent = losses;
            userLeft.textContent = left;
        if (left <= 0) {
            alert("Oh no, you've tried all the chances!")
            wins = 0;
            losses = 0;
            left = 10;
        }
        yourGuess.textContent = userGuess;
          
        } 
        
}