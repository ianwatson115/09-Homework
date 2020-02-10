const generate = require("./generateHTML");
const fs = require("fs");
const convertFactory = require("electron-html-to");
const inquirer = require("inquirer");
const axios = require("axios");

let conversion = convertFactory({
    converterPath: convertFactory.converters.PDF
});

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
}];


function getUser(response) {
	axios
		.get(`https://api.github.com/users/${response.username}`)
		.then(result => {
			profileSorter(result.data);
		}).catch(err => {
			console.log(`User not found`);
			throw err;
		});
}

function profileSorter(data) {
	const star = data.starred_url.split(",");
	const location = data.location;
	const user = {
		name: data.login,
		profileImage: data.avatar_url,
		githubLink: data.html_url,
		location: location,
		gMaps: `https://www.google.com/maps?q=${location}`,
		blog: data.blog,
		bio: data.bio,
		publicRepos: data.public_repos,
		followers: data.followers,
		following: data.following,
		stars: star.length
	}
	console.log(user);
	// writeToPDF(user);
}

function writeToPDF (response) {
	
}

function init() {
	inquirer.prompt(questions).then(answers => {
		const answerData = answers;
		getUser(answers);
	})
}
init();
