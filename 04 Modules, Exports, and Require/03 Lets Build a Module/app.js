// 'require' and 'module.exports' are keywords/funcionality
// added by the nodejs

// with 'require' i can include a js file. THIS IS A FILE.
// use the correct path for the file + you don't have to use the '.js'
var greetFn = require('./Greet');

// the value of the greetFn var will be whatever the
// Greet.js exports
// (module.exports)
greetFn();