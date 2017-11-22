"use strict"
import axios from 'axios';


// get book action creator
export function getBooks(){
  return function(dispatch){
    axios.get('/api/books')
      .then (function(response){
        dispatch({type: "GET_BOOKS", payload: response.data})
      })
      .catch (function(err){
        dispatch({type: "GET_BOOKS_ERROR", payload: "there was an error getting the data"})

      })
  }
  // return {
  //   type: "GET_BOOKS",
  //   payload: book
  // }
}



// post book action creator
export function postBook(book){
  return function(dispatch){
    axios.post('/api/books', book)
      .then (function(response){
        dispatch({type: "POST_BOOK", payload: response.data})
      })
      .catch (function(err){
        dispatch({type: "POST_BOOK_REJECTED", payload: " there was an error posting the book"})
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
    axios.delete('/api/books/' + id)
      .then (function(response){
        dispatch({type: "DELETE_BOOK", payload: id})
      })
      .catch (function(err){
        dispatch({type: "DELETE_REFUSED", payload: err + "an error occur the book was not deleted"})
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



// Reset Button Form
export function resetButton(){
  return {
    type: "RESET_BUTTON",
  }
}
