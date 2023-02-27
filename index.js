const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
	type: "input",
   message: "What is the name of your project?",
   name: "title",
},
{
	type: "input",
   message: "Please describe the purpose of your project.",
   name: "description",
},
{
	type: "input",
   message: "Please specify installation process if needed.",
   name: "installation",
},
{
	type: "input",
   message: "How this application is used?",
   name: "usage",
},
{
	type: "checkbox",
   message: "Please select a license applicable to this project.",
   name: "license",
	choices: ["MIT", "Apache License 2.0", "Mozilla Public License 2.0", "BSD-2", "BSD-3", "none"],
},
{
	type: "input",
   message: "Please list any contributors.",
   name: "contributing",
},
{
	type: "input",
   message: "Please provide any test if needed.",
   name: "tests",
},
{
	type: "input",
   message: "Contact info",
   name: "questions",
},
{
	type: "input",
   message: "What is your GitHub name?",
   name: "creator",
},
{
	type: "input",
   message: "Please enter your email",
   name: "email",
},
];

// function to write README file
function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// function to initialize program
function init() {
	inquirer.prompt(questions)
	.then ((response) => {
			console.log("Congratulations! Your professional README is created!");
			writeToFile("professional-README.md", generateMarkdown({...response}))
		})
	}


// function call to initialize program
init();
