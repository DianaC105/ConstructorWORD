// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// * A string value to store the underlying character for the letter

// * A boolean value that stores whether that letter has been guessed yet

// * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// Constructor for Letter:
function Letter (letter) {

    // * A string value to store the underlying character for the letter
    this.letter= letter;
   // this.underlying = " __ ";

   // * A boolean value that stores whether that letter has been guessed yet
    this.guessLetter = false;
    
   // * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.character = function (){
        if (!this.guessLetter){
            console.log (err);
            return " __ ";
        } else{
            console.log (res);
            return this.letter;
        }
    }

    this.checkGuess = function(guess){
        if (guess ===this.letter){
            console.log (guess);
            this.guessLetter = true;
        }
    }
}

// exporting our Letter constructor
module.exports = Letter;