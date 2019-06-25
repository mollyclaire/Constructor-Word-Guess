// Constructor function that defines the letter the user guesses, a Boolean to test whether
// it's the correct letter or not, and two other methods.
function Letter(letter) {
    this.letter = letter;
    this.guessed = false;

    // This method creates a string if a letter is guessed and an underscore if a letter is not guessed.
    this.toString = function() {
        if (this.letter === " ") {
            this.guessed = true;
            console.log(" ");
        } else {
            this.guessed = false;
            console.log("_");
        }
    }
    // This method tests whether the guessed letter is one of the underlying letters in the word.
    this.guess = function(guess) {
        if (guess === this.guess) {
            this.guessed = true;
        }
    }
}

// Declaring a variable for testing
var test = new Letter(" ");
test.toString();
test.guess();

// This exports the constructor in this file, so that it can be accessed by word.js
module.exports = Letter;
