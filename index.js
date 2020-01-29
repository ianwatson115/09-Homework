const generate = require("./generateHTML");
const questions = [
  "Please enter your Github Username",
  ""
];

fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
	// The API call was successful!
	console.log('success!', response);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

function writeToFile(fileName, data) {
 
}

function init() {

}
// init()
