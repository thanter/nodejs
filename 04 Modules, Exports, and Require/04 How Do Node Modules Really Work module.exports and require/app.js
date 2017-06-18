var greeter = require('./greet');

greeter.english();
greeter.spanish();

/*
HOW DOES 'require' WORK
- require is a node function that you pass a path to.
- module.exports is what the 'require' function RETURNS.

This works because YOUR CODE IS ACTUALLY WRAPPED IN A FUNCTION
that is given these things as functino parameters. See below:

INITIAL MODULE:
var greet = function() {
	console.log('test');
}

module.exports = greet;

WHEN 'require' IS RUN (wrapped inside a function):
(function (exports, require, module, __filename, __dirname) {
	var greet = function() {
		console.log('test');
	}

	module.exports = greet;
});

CALLING THE FUNCTION ABOVE:
fn(module.exports, require, module, filename, dirname);

return module.exports;		// by reference, i can change its value

*/