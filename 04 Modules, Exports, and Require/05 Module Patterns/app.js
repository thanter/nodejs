

var greet1 = require('./greet1')
greet1();

var greet2 = require('./greet2');
greet2.greet();

var Greet3 = require('./greet3');		// object from function constructor
Greet3.greet();

// ASIDE
// If i change the greeting value here:
Greet3.greeting = "Changed greeting";

// and then re-require the module, i get the changed value (Because of caching)
var Greet3b = require('./greet3');
Greet3.greet();


var greet4 = require('./greet4');
greet4.greet();