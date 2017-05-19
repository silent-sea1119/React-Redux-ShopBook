"user strict"
import {createStore} from 'redux';

// STEP 3 DEFINE REDUCER

const reducer = function(state={books:[]}, action){
  switch (action.type){
    case "POST_BOOK":
    let books = state.books.concat(action.payload);
    return {books};
    // using babel preset stage-1 notation we can also write
    //return {books: [...state.books, ...action.payload]} // wich concat the 2 array on the flight
    break;

  }
};

// STEP 1 CREATE THE store
 const store = createStore(reducer);
 store.subscribe(function(){
   console.log('Current state is ', store.getState());
   //console.log('Current price is ', store.getState()[1].Price); accesing a value of the object here price
 })


// STEP 2 CREATE AND DISPATCH ACTION

store.dispatch({type:"POST_BOOK", payload: [
  {
  Title: "les 4 fantastique",
  Author: "Herge",
  Category: "Siencfiction",
  Price: 29.5
  },
  {
  Title: "Matrix",
  Author: "Brother",
  Category: "Siencfiction",
  Price: 33.5
}
]})

store.dispatch({type: "POST_BOOK", payload: [
  {
    Title: "Tintin au tibet",
    Author: "Herge",
    Category: "Aventure",
    Price: 24.5

  }
]})
