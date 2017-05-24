"use strict"

////////////////////////////
// STEP 3 DEFINE REDUCER //
//////////////////////////

const bookReducers = function(state={books:[]}, action){

  switch (action.type){

    case "GET_BOOKS":
    return {...state, books:[...action.payload]}

    // Using standard
    // let books = state.books.concat(action.payload);
    // return {books};
    break;




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
    const newBookToUpdate = {...objectToUpdate, title: action.payload.title}

    //update the book at the specified index with methode .slice() with the babel preset stage-1 spread operator methode and append to it the newBookToUpdate
    return {books: [...curentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...curentBookToUpdate.slice(indexToUpdate+1)]}

    //Using standard javascript
    // let bookPartA = curentBookToUpdate.slice(0,indexToUpdate);
    // bookPartA = bookPartA.concat(newBookToUpdate);
    // let bookPartB = curentBookToUpdate.slice(indexToUpdate+1);
    // let books = bookPartA.concat(bookPartB);
    // return {books};
    break;
    default:
  }
  return state;
}

export default bookReducers;
