//server.js

//Import modules
var express = require('express');


var app = express();

//Set View engine
app.set('view engine', 'ejs');
app.set('views', __dirname+'/src/views/');

//Pull in routes
app.require('./routes.js')(app);

//Start app
app.listen(8080)