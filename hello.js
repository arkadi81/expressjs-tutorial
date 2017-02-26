// hello world app from ember website tutorial

var express = require('express');
var app = express();

app.get('/', function (req, res) { // request, response callback
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})