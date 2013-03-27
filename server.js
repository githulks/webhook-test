var http = require('http');

http.createServer(function (req, res) {
  if (req.url === '/') {
    res.setHeader('content-type', 'text/plain');
    res.end('hithere');
  }
}).listen(3000);
