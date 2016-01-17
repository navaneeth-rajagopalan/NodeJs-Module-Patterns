// Pattern 1
var mod1 = require('./myModule1');
mod1();

// Pattern 2
//require return module.exports. We are going in to fetch the func thats a member of the module.exports object
var mod2 = require('./myModule2').func;
mod2();

// Pattern 3
var mod3 = require('./myModule3');
mod3.func();
mod3.msg = 'Mod 3 new message...'

var mod3b = require('./myModule3');
// will print the updated message. This is because require caches the module.exports and cached module.exports will be returned when required again.
// Since it is an object it will end being a reference. 
mod3b.func();

// Pattern 4
var Mod4 = require('./myModule4');
var mod4 = new Mod4();
mod4.func();
mod4.msg = "Mod 4 new message";
// Not the same object used by mod4
var mod4b = new Mod4();
mod4b.func();

// Pattern 5 - Revealing module pattern
var mod5 = require("./myModule5");
mod5.func();