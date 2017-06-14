"use strict"

var express = require('express');
var app = express();
var path = require('path');


// First middleware to define folder for static file
app.use(express.static('public'));

// routing for homepage
app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

// runing server for listening port
app.listen(3000, function(){
  console.log("Server started and listening on port 3000");
})
