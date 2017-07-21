//import event module
var events = require('events');
//create event emitter object
var eventEmitter = new events.EventEmitter();

//create an event handler
var connectHandler = function connected(){
	console.log('connection succesful.');
	
	//fire the data_received event
	eventEmitter.emit('data_received');
}

//bind connection event with handler
eventEmitter.on('connection', connectHandler);

//bind the data_received event with anoymous function
eventEmitter.on('data_received', function(){
	console.log('data received succesfully.');
});

//fire the connection event
eventEmitter.emit('connection');
console.log("program ended");