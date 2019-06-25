function Letter(letter) {
    this.letter = letter;
    this.guessed = false;

    this.toString = function() {
        if (this.letter === " ") {
            this.guessed = true;
            console.log(" ");
        } else {
            this.guessed = false;
            console.log("_");
        }
    }
    this.guess = function(guess) {
        if (guess === this.guess) {
            this.guessed = true;
        }
    }
}