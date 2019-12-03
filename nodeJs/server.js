var http = require('http');

http.createServer(function(request,response){	
	response.writeHead(200,{"Content-Type":"text/plain"},"UTF-8")
	
	response.end("test-request 测试数据")
	
}).listen(8088);

console.log('server running at Http://127.0.0.1:8088') 