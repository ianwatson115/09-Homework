const generate = require("./generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
var prompt = inquirer.createPromptModule();

const questions = [{
	type: "input",
	name: "username",
	message: "Please enter your Github Username"
},
{
	type: "list",
	name: "color",
	message: "What would you like to change the color to?",
	choices: ["blue", "red", "pink", "green"]
}
];

axios.get("https://api.github.com")
	.then((response) => {
		prompt(questions).then(answers => {
			
		});
	})

function writeToFile(fileName, data) {

}



function init() {

}
// init()
