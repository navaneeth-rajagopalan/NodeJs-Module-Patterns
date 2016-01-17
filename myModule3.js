var msg = require('./myMsg.json');
function Mod3(){
    this.msg = msg.message+3;
    this.func = function(){
        console.log(this.msg);
    };
};
//replacing exports with the custom object
module.exports = new Mod3();