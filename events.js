//Node JS is single threaded framework but supports concurrency through Event s and Callbacks

const EventEmitter=require("events").EventEmitter;

const logger=new EventEmitter();

logger.on('error', function(message){//This is the callback to handle emit request
    console.log("Error Message from Event Emitter is:- " + message);
});


//logger.emit("error", "This is first Error");
//logger.emit("error", "This is Second Error");

module.exports=logger;


