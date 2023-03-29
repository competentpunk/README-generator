
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// Always put required uptop
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input', 
        name: 'motivation', 
        message: 'What was your motivation?',
}
    // "Why did you build this project?", 
    // "What problem does it solve?", 
    // "What did you learn?"
];
console.log(questions)

// Create README.md file 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    // us fs here to write file and path
}
// pull the questions array and add a place for input

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Creating README.md')
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }))
    });
    // inquirer and generateMarkdown
}

// Function call to initialize app
init();
