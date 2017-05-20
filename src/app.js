"user strict"
import {createStore} from 'redux';

// STEP 3 DEFINE REDUCER

const reducer = function(state={books:[]}, action){
  switch (action.type){
    case "POST_BOOK":
    //using babel preset stage-1 spread operator notation we can also write
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

    //remove the book at the specified index with methode .slice() with the babel preset stage-1 methode spread operator
    return {books: [...curentBookToDelete.slice(0, indexToDelete), ...curentBookToDelete.slice(indexToDelete+1)]}

    // Using standard javascript
    // let bookPartA = curentBookToDelete.slice(0,indexToDelete);
    // let bookPartB = curentBookToDelete.slice(indexToDelete+1);
    // let books = bookPartA.concat(bookPartB);
    // return {books};
    break;

    case "UPDATE_BOOK":
    // create a copy of the curent state
    const curentBookToUpdate = [...state.books];

    // determine in wich index of the books array are the id we want to update by the methode .findIndex(callbackfn)
    const indexToUpdate = curentBookToUpdate.findIndex(function(book){
        return book.id === action.payload.id;
      }
    )
    // we stock in a variable the object at indexToUpdate in the array curentBookToUpdate
    const objectToUpdate = curentBookToUpdate[indexToUpdate];

    // Then we stock in a new variable using babel preset stage-1 the object to update merge with the key,value we want to update
    // The key here Title is sensible to the case to be updated, if we write title : action.payload.Title
    // Another key value title ll be add to the new object (not what we want to do)
    // Writing Title like the initial object ll force to update this key by the payload value
    // ( the ... make all the work without it we ll have an object inside an object no merge ll occur)
    const newBookToUpdate = {...objectToUpdate, Title: action.payload.Title}

    //update the book at the specified index with methode .slice() with the babel preset stage-1 spread operator methode and append to it the newBookToUpdate
    return {books: [...curentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...curentBookToUpdate.slice(indexToUpdate+1)]}
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
  },
  {
    id: 3,
    Title: "la belle et la bete",
    Author: "Disney",
    Category: "Dessin Anime",
    Price: 18
  }
]})

// Action 2 post book
store.dispatch({type: "POST_BOOK", payload: [
  {
    id: 4,
    Title: "Tintin au tibet",
    Author: "Herge",
    Category: "Aventure",
    Price: 24.5
  }
]})

// Action 3 delete book
store.dispatch({type: "DELETE_BOOK", payload: {id: 2}})


// Action 4 update book
store.dispatch({type: "UPDATE_BOOK", payload: {
  id: 1,
  Title: "Les 4 Fantastiques"
}

})
