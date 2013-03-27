var http = require('http');

http.createServer(function (req, res) {
  res.setHeader('content-type', 'text/plain');
  if (req.url === '/') {
    res.end('hithere');
  }
  else {
    res.end('fackkkkkk you');
  }
}).listen(3000);
