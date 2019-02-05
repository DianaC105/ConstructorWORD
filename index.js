// The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

// 3. `Letter.js` *should not* `require` any other files.

// 4. `Word.js` *should only* require `Letter.js`

// 5. **HINT:** Write `Letter.js` first and test it on its own before moving on, then do the same thing with `Word.js`

// 6. **HINT:** If you name your letter's display function `toString`, JavaScript will call that function automatically whenever casting that object to a string (check out this example: <https://jsbin.com/facawetume/edit?js,console>)

// ________________________________________________________________________
const Word = require("./word.js");

// dependency for inquirer npm package
var inquirer = require("inquirer");

// Animal Constructor
const wordChoices =[
    "dog", "cat","lion","hippopotumus","tiger","monkey","duck"
];

var guesses;
var pickedWord;



// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
  this.age + "\nLanguages: " + this.language);
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }, {
    name: "age",
    message: "How old are you?"
  }, {
    name: "language",
    message: "What is your favorite programming language?"
  }
]).then(function(answers) {
  // initializes the variable newProgrammer to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language);
  // printInfo method is run to show that the newProgrammer object was successfully created and filled
  newProgrammer.printInfo();
});
