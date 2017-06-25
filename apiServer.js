var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// for shoping cart session persistance
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

///////////////////////
// STARTING OUR API //
/////////////////////

// request mongoose and conection to mongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop'); // here we ask to connect our api with our database named bookshop if the database dont exsite mongoose ll create it automaticely

// checking if the conection to mongodb succeded and add log the error if it faild...
var db = mongoose.connection;
db.on('error', console.err.bind(console, '#Mongo DB - connection error:'));

// require the model with the schema
Books = require('./models/books.js');


//SETUP SESSION PERSISTANCE//

app.use(session({
  secret: 'mySecretString',
  saveUninitialized: false,
  resave: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 2},
  store: new MongoStore({mongooseConnection: db, ttl: 2 * 24 * 60 * 60}) // 2 day in sec
}))




//END SESSION PERSISTANCE//

//------->>POST BOOKS <<-------------
app.post('/books', function(req, res){
  var book = req.body;

  Books.create(book, function(err, books){
    if (err){
      throw err;
    }
    res.json(books);
  })
});

//------->>GET BOOKS <<-------------

app.get('/books',function(req, res){
  Books.find(function(err, books){
    if (err){
      throw err;
    }
    res.json(books);
  })
});

//------->>DELETE BOOKS <<-------------

app.delete('/books/:_id', function(req, res){
  var query = {_id: req.params._id};

  Books.remove(query, function(err, books){
    if (err){
      throw err;
    }
    res.json(books);
  })
});

//------->>UPDATE BOOKS <<-------------

app.put('/books/:_id', function(req, res){
  var book = req.body;
  var query = {_id: req.params._id};
  var update = {
    '$set':{
      title: book.title,
      description: book.description,
      image: book.image,
      price: book.price
    }
  };

  var options = {new: true};

  Books.findOneAndUpdate(query, update, options, function(err, books){
    if (err){
      throw err;
    }
    res.json(books);
  })
});

// END API


// ADD APP LISTENER ON APISERVER PORT 3001
app.listen(3001, function(err){
  if (err){
    return console.log(err);
  }
  console.log("API server is up and listening on port 3001");
})
