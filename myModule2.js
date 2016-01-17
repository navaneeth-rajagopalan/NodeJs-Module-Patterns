var msg = require('./myMsg.json');
// adding the function func to the empty object module.exports
module.exports.func = function() {
    console.log(msg.message+2);
};
