
const http=require('http');
const path=require('path');
const {readFileSync} =require('fs');


const homePage=readFileSync("./pages/home.html");
const homeStyles=readFileSync("./pages/assets/css/home.css");


//Creating Node server for HTTP Request
http.createServer(function(request, response){
    const url=request.url;
if(url=='/home'){
    response.writeHead(200, {'content-type' : 'text/html'});
    response.write(homePage);
    response.end();
}
else if(url ==='home.css'){
    response.writeHead(200, {'content-type' : 'text/css'});
    response.write(homeStyles);
    response.end();
}

}).listen(3000);

console.log('Listening on port 3000...');