var http = require('http'); 

http.createServer(function (request,response) {
//Send the HTTP header
//HTTP Status:200:OK
//Content Type: text/plain
response.writeHead(200,{'Content-Type':'text/plain'});

//send the response body as "Hello world"
response.end('Hello World\n');
}).listen(8080)

//console will print the message
console.log('server running')