const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (req, res) => {
	if(req.url == '/')
	{
		fs.readFile('node-index.html', (err, content) => {
			if(err) throw err;
			//res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(content);
		})
	}
});

server.listen(3000, () => {
	console.log('Server running on port.');
});