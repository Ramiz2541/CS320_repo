const EventEmitter = require('events');

//the purpose of event emitters is that it calls listener functions
//that preform an acion once an event is triggered.

//first we create class 
class Emitter extends EventEmitter{

}

//initilize object
const Emitter = new Emitter();

//then we create a listener 
Emitter.on('event', () => console.log('event started'));

//we create an event 
Emitter.emit('event');

//this should work but there is a bug here that says emitter has already been declared somewhere