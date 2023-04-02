// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "deployedlink",
    message: "Add deployed link here:",
  },

  {
    type: "input",
    name: "description",
    message: "Describe the purpose of this project:",
  },
  {
    type: "input",
    name: "install",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "How is this app used?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "testing",
    message: "How do you test this app?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license did you choose?",
    choices: ["MIT", "GPLv3", "GPL", "None"],
  },
];

// Create README.md file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  // us fs here to write file and path
}

// pull the questions array and add a place for input
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Creating README.md");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
  // inquirer and generateMarkdown
}

// Function call to initialize app
init();
