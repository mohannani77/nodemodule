const http=require('http');


//Creating Node server for HTTP Request
http.createServer(function(request, response){
    response.writeHead(200);//Http  status code in Header of the Request
    response.write("Response Body from HTTP SERVER");// HTTP response Body
    response.end();//Close the connection
}).listen(8080);

console.log('Listening on port 8080...');