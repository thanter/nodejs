// function statement
function greet() {
	console.log("Hello there");
}

greet();

// function are first-class
function someGreeting(fn) {
	fn();
}

// passing the name of a function as argument
someGreeting(greet);
// or
someGreeting(() => console.log('First class citizen'));

// function expressions
var greetMe = function() {
	console.log("Hello Thanasis");
}

greetMe();