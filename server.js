// @see https://github.com/cloudhead/node-static

var static = require('node-static');

var file = new static.Server('./public');

require('http').createServer(function (request, response) {

    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();

}).listen(80);