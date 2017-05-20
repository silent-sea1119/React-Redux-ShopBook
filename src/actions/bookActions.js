"use strict"

// post book action creator
export function postBook(book){
  return {
    type: "POST_BOOK",
    payload: book
  }

}



// delete book action creator
export function deleteBooks(id){
  return {
    type: "DELETE_BOOK",
    payload: id
  }

}



// update book action creator
export function updateBooks(book){
  return {
    type: "UPDATE_BOOK",
    payload: book

  }
}
