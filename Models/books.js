"use strict"

var mongoose = require(mongoose);

// we create and define our schema here
var booksSchema = mongoose.schema({
  title: String,
  description: String,
  image: String,
  price: Number,

});

// and define our model using the schema
var Books = mongoose.model(Books, booksSchema);

// and export our variable Books
module.exports = Books;
