var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname  + "/dist"));

var port = process.env.PORT || 2225;
app.listen(port);

console.log(`Server init on port ${port}`);