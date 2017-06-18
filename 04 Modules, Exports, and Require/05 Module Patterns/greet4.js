// REVEALING MODULE PATTERN
// most used pattern where i can reveal whatever values i want

var greeting = "hello world !!!!";

function greet() {
	console.log(greeting);
}

module.exports = {
	greet: greet
}