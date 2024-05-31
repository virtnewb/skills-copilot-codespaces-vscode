// Create a web server
// Load the express module
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/comments', function(req, res) {
  fs.readFile('comments.json',