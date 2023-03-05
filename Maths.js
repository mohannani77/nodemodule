
const logger=require('./events');

if((1/0)==Infinity){
logger.emit("error", "Number is divisble by Zero");//Triggers the logger event in Event.js file
}



