/* Load the HTTP library */
var http = require("http");

/* Create an HTTP server to handle requests */
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "type-plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);