//server.js

//Import modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


//Import the models

var xml = require('./src/models/xml');
var json = require('./src/models/json');
var csv = require('./src/models/csv');

//Set View engine
app.set('view engine', 'ejs');
app.set('views', __dirname+'/src/views/');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Pull in routes
require('./routes.js')(app,xml,json,csv);

//Start app
app.listen(8080)