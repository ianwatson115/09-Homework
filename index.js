const generate = require("./generateHTML");
const inquirer = require("inquirer");
const axios = require("axios");

const questions = [
  "Please enter your Github Username",
  
];

axios.get("https://api.github.com")
	.then((response) => {
		console.log(response.data);
	})

function writeToFile(fileName, data) {
 
}

function init() {

}
// init()
