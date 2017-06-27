"use strict"

var mongoose = require('mongoose');

// we create and define our schema here
var booksSchema = mongoose.Schema({
  title: String,
  description: String,
  images: String,
  price: Number,

});

// and define our model using the schema
var Books = mongoose.model('Books', booksSchema);

// and export our variable Books
module.exports = Books;
