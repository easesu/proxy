var fs = require('fs');
var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

proxy.on('error', function(err) {
  console.log(err);
});

http.createServer(function(req, res) {
        proxy.web(req, res, {
          prependPath: false,
          target: req.url
        });
}).listen(8000);
