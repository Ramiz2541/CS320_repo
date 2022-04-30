const EventEmitter = require('events');
const uuid = require('uuid'); //this is used to generate random ID's 

//console.log(uuid.v4()); //must specify v4

class Logger extends EventEmitter{
    log(msg){
        //call event
        this.emit('message', {id: uuid.v4(), msg });
    }
}

module.exports = Logger; //we export Logger class to use in our main.js 
