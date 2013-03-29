var http = require('http');
var ecstatic = require('ecstatic');

http.createServer(function (req, res) {
  res.setHeader('content-type', 'text/plain');
  if (req.url === '/') {
    res.end('hithere');
  }
  else if (req.url === '/test') {
    res.end('fackkkkkk you');
  }
  else ecstatic(req, res);

}).listen(3000);
