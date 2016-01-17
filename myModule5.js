var msg = require('./myMsg.json');
function Mod4(){
    this.msg = msg.message+4;
    this.func = function(){
        console.log(this.msg);
    };
};
//if we dont want the same object to comeback all the time . Replace the exports object with the function constructor. Instead of creating a new object, we give back the ability to create a new object.
//module.exports = new Mod3();
module.exports = Mod4;