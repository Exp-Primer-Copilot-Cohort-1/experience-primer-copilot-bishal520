// Create web server
onst http = require('http');

const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello, world!'); });

server.listen(3000, () => { console.log('Server is running on port 3000'); });
// Create a web server that listens on port 3000 and serves the following responses:
