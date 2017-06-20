"use strict"
import axios from 'axios';

// get book action creator
export function getBooks(book){
  return {
    type: "GET_BOOKS",
    payload: book
  }
}

// post book action creator
export function postBook(book){
  return function(dispatch){
    axios.post('/books', book)
      .then (function(response){
        dispatch({type: "POST_BOOK", payload: response.data})
      })
      .catch (function(err){
        dispatch({type: "POST_BOOK_REJECTED", payload: " there was an erroe posting the book"})
      })
  }
  // return {
  //   type: "POST_BOOK",
  //   payload: book
  //
  // }
}



// delete book action creator
export function deleteBook(id){
  return function(dispatch){
    axios.delete('/books/' + id)
      .then (function(response){
        dispatch({type: "DELETE_BOOK", payload: id})
      })
      .catch (function(err){
        dispatch({type: "DELETE_REFUSED", payload: err + "an error occu the book was not deleted"})
      })
  //   type: "DELETE_BOOK",
  //   payload: id
   }
}



// update book action creator
export function updateBook(book){
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}
