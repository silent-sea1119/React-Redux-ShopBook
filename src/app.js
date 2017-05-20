"user strict"
import {createStore} from 'redux';

// STEP 3 DEFINE REDUCER

const reducer = function(state={books:[]}, action){
  switch (action.type){
    case "POST_BOOK":
    //using babel preset stage-1 notation we can also write
    return {books: [...state.books, ...action.payload]} // wich concat the 2 array on the flight in the object
    // Using standard
    // let books = state.books.concat(action.payload);
    // return {books};
    break;

    case "DELETE_BOOK":
    // create a copy of the curent state
    const curentBookToDelete = [...state.books];
    // determine in wich index of the books array are the id we want to delete by the methode .findIndex(callbackfn)
    const indexToDelete = curentBookToDelete.findIndex(
      function(book){
        return book.id === action.payload.id; // if true the book is pass as parametre in findIndex() function wich ll stock the index of this book in the variable indexToDelete
      }
    )
    // remove the book at the specified index with methode .slice()
    return {books: [...curentBookToDelete.slice(0, indexToDelete), ...curentBookToDelete.slice(indexToDelete+1)]}
    break;

    return state;

  }
};


// STEP 1 CREATE THE STORE
 const store = createStore(reducer);
 store.subscribe(function(){
   console.log('Current state is ', store.getState());
   //accessing a value price of the object
   //console.log('Current price is ', store.getState()[1].Price);
 })




// STEP 2 CREATE AND DISPATCH ACTION

// Action 1 post book
store.dispatch({type:"POST_BOOK", payload: [
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
}
]})

// Action 2 post book
store.dispatch({type: "POST_BOOK", payload: [
  {
    id: 3,
    Title: "Tintin au tibet",
    Author: "Herge",
    Category: "Aventure",
    Price: 24.5

  }
]})

// Action 3 delete book
store.dispatch({type: "DELETE_BOOK", payload: {id: 1}})
