"use strict"

// get book action creator
export function getBooks(){
  return {
    type: "GET_BOOKS",
  }
}

// post book action creator
export function postBook(book){
  return {
    type: "POST_BOOK",
    payload: book
  }
}



// delete book action creator
export function deleteBook(id){
  return {
    type: "DELETE_BOOK",
    payload: id
  }
}



// update book action creator
export function updateBook(book){
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}