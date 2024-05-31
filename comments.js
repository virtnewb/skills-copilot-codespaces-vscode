// Create web server
// npm install express
// npm install body-parser
// npm install ejs
// npm install express-sanitizer
// npm install mongoose
// npm install method-override
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Comment = require("./models/comment");
var seedDB = require("./seeds");
var methodOverride = require("method-override");

// Connect to the database
mongoose.connect("mongodb://localhost/yelp_camp_v5");

// Use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Use ejs
app.set("view engine", "ejs");

// Use express-sanitizer
app.use(methodOverride("_method"));

// Use seedDB
seedDB();

// Routes
app.get("/", function(req, res) {
    res.send("Hello, world!");
});

// Index
app
