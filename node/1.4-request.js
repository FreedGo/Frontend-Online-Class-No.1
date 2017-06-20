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
	response.write('Hello World!');
	response.end();
};
server.on('request',handleRequest);

server.listen(8089,function () {
	console.log('server is running at post 8089');
});