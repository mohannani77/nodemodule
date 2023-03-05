
//This package will help with OS specific Info
const os=require('os');

console.log("Free memory:-" + (os.freemem()/1024/1024) + " bytes");
console.log("Platform: ", os.platform());
console.log("Host Name: ", os.hostname());   