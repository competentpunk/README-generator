// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [ 
    "What was your motivation?", 
    "Why did you build this project?", 
    "What problem does it solve?", 
    "What did you learn?"
];
console.log(questions)

// Create README.md file 
const fs = require('fs');
fs.appendFile('README.txt', `${process.argv[2]}\n`, (err) =>
err ? console.error(err) : console.log('Commit logged!')
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// pull the questions array and add a place for input

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
