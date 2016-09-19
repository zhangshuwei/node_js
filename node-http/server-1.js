var http = require('http');
var hostname = 'localhost';
var port = '3000';

var server = http.createServer(function(req,res){
	console.log(req.headers);
	res.setHeader('Content-Type','text/html');
	res.statusCode = 200;
	res.end('<html><body><h1>Hello World</h1></body></html>');
});

server.listen(port,hostname,function(){
	console.log('Server running at http://${hostname}:${port}/');
})