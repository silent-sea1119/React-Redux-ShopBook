"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import Reducers from './reducers/index';
import addToCart from './actions/cartActions';
import {postBook, deleteBooks, updateBooks} from './actions/bookActions';




//////////////////////////////
// STEP 1 CREATE THE STORE //
////////////////////////////
 const middleware = applyMiddleware(logger); // to use logger  middleware (console state improvement) first instal it with this cli npm i --save-dev redux-logger then we import applyMiddleware from 'redux' and logger 'redux-logger' then declare the middleware on this line and add middleware after the reducer in createStore(reducers, middleware);
 const store = createStore(Reducers, middleware);
 // we use redux-logger middleware to read the state in the console more efficiently so we get ride of this line:
 // store.subscribe(function(){
 //   console.log('Current state is ', store.getState());
 //   //for accessing the value price of the object
 //   //store.getState()[1].Price
 // })



/////////////////////////////////////
// STEP 2 CREATE AND DISPATCH ACTION
////////////////////////////////////

// Action 1 post book
store.dispatch(postBook([
  {
    id: 1,
    Title: "les 4 fantastique",
    Author: "Herge",
    Category: "Siencfiction",
    Price: 29.5
  },
  {
    id: 2,
    Title: "Matrix",
    Author: "Brother",
    Category: "Siencfiction",
    Price: 33.5
  },
  {
    id: 3,
    Title: "la belle et la bete",
    Author: "Disney",
    Category: "Dessin Anime",
    Price: 18
  },
])
)


// Action 2 post book
store.dispatch(postBook([{
  id: 4,
  Title: "Tintin au tibet",
  Author: "Herge",
  Category: "Aventure",
  Price: 24.5
  }])
)


// Action 3 delete book
store.dispatch(deleteBooks({id: 4}))


// Action 4 update book
store.dispatch(updateBooks({
  id: 1,
  Title: "Les 4 Fantastiques"
  })
)


// Action Add to Cart
store.dispatch(addToCart([{id: 1}]));
