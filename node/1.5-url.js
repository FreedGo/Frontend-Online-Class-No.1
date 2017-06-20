/**
 * Created by Freed on 2017/6/19.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */

"use strict";

const http = require('http');
const server = http.createServer();
let handleRequest = function (request,response) {
	console.log('收到请求在：'+request.url);
	let url = request.url;
	response.writeHead(200,{
		'Context-Type':'text/html'
	});
	switch (url){
		case '/':
			response.end('index page');
			break;
		case '/login':
			response.end('login page');
			break;
		case '/register':
			response.end('register page');
			break;
		default :
			response.end('404');
			break;
	}
};
server.on('request',handleRequest);

server.listen(8089,function () {
	console.log('server is running at post 8089');
});

/**
 * Created by Freed on 2017/6/19.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */
