/**
 * Created by Freed on 2017/6/20.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */
'use strict';

const http = require('http');
const fs = require('fs');
const sever = http.createServer();
sever.on('request',function (req,res) {
	let url = req.url;
	switch (url){
		case '/':
		fs.readFile('./static/html/index.html',function (err,data) {
			if (err){
				throw err;
			}else{
				res.writeHead(200,{
					'Context-Type':'text/html'
				});
				res.end(data);
			}
		})
	}
	// res.end('Hello world!');
});

sever.listen(8090,function () {
	console.log('Server is running at port 8090');
	console.log('Please visit http://127.0.0.1:8090/');
});