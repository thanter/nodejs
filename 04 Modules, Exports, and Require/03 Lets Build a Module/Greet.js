var greetFn = function() {
	console.log('hello there fellow');
}

// In order for 'greet' function to be available on other side
// I have to export it. With this functionality i can export whatever i want
// This prevents from accidentally conflicting with other code
module.exports = greetFn;