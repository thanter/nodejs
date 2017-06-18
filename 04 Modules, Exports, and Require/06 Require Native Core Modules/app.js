// There are numerous core modules you can use
// You can find them inside the node code in 'libs' folder
// Or check the docs online

var utilities = require('util');

var name = "Thanasis";
var greeting = utilities.format("Hello, %s", name);

utilities.log(greeting);