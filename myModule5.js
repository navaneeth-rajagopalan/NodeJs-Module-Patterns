// Commonly used pattern - Revealing module pattern
// Revealing module pattern - Exposing only the properties and methods that we want via the returned object. A very common and clean way to structure and protect the code within modules.
var msg = require('./myMsg.json').message+5;
function func (){
    console.log(msg);
};

module.exports = {
    func: func
};