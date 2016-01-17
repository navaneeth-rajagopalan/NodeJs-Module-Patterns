// Patter 1
var mod1 = require('./myModule1');
mod1();

// Patter 2
//require return module.exports. We are going in to fetch the func thats a member of the module.exports object
var mod2 = require('./myModule2').func;
mod2();

// Patter 3
var mod3 = require('./myModule3');
mod3.func();
mod3.msg = 'Mod 3 new message...'

var mod3b = require('./myModule3');
// will print the updated message. This is because require caches the module.exports and cached module.exports will be returned when required again.
// Since it is an object it will end being a reference. 
mod3b.func();

// Patter 4
