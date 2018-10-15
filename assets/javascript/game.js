var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = 9;

var userWin = document.getElementById("user-win");
var userLosses = document.getElementById("user-losses");
var guessesLeft = document.getElementById("guesses-left");
var yourGuess = document.getElementById("your-guess");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess) {
        if (userGuess === computerGuess) {
            wins++;
        } else if (userGuess != computerGuess) {
            losses++;
        }
    }
}