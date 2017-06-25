"use strict"
import axios from 'axios';

// Action creator GET CART
export function getCart(){
  return function(dispatch){
    axios.get('/api/cart')
      .then(function(response){
        dispatch({type: "GET_CART", payload: response.data})
      })
      .catch(function(err){
        dispatch({type: "GET_CART_REJECTED", payload:'Error when trying geting the data cart from session'})
      })
  }
}


// Action creator ADD TO CART
export function addToCart(cart){
  return function(dispatch){
    axios.post('/api/cart', cart)
      .then(function(response){
        dispatch({type: "ADD_TO_CART", payload: response.data})
      })
      .catch(function(err){
        dispatch({type: "ADD_TO_CART_REJECTED", payload: "Error when adding to cart"})
      })
  }
  // return {
  //   type: "ADD_TO_CART",
  //   payload: book
  // }

}



// Action creator DELETE CART ITEM
export function deleteCartItem(cart){
  return function(dispatch){
    axios.post('/api/cart', cart)
      .then(function(response){
        dispatch({type: "DELETE_CART_ITEM", payload: response.data})
      })
      .catch(function(err){
        dispatch({type: "DELETE_CART_ITEM_REJECTED", payload: "Error when deleting an item from the cart"})
      })
  }
  // return {
  //   type: "DELETE_CART_ITEM",
  //   payload: cart
  // }
}



// Action creator UPDATE CART
export function updateCart(_id, unit, cart){

  // create a copy of the curent state
  let curentBookToUpdate = cart;

  // determine in wich index of the cart array are the id we want to update by the methode .findIndex(callbackfn)
  let indexToUpdate = curentBookToUpdate.findIndex(function(book){
      return book._id === _id;
    }
  )
  // we stock in a variable the object at indexToUpdate in the array curentBookToUpdate
  let objectToUpdate = curentBookToUpdate[indexToUpdate];

  // Then we stock in a new variable the object to update merge with the value we want to update
  // The key here "quantity" of the book obkject is sensible to the case to be updated
  // ( the ... make all the work without it we ll have an object inside an object no merge ll occur)
  let newBookToUpdate = {...objectToUpdate, quantity: objectToUpdate.quantity + unit};

  //stock in variable cartUpdate the cart updated at the specified index with methode .slice()with spread operator methode and append to it the newBookToUpdate
  let cartUpdate = [...curentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...curentBookToUpdate.slice(indexToUpdate + 1)];

  return function(dispatch){
    axios.post('/api/cart', cartUpdate)
      .then(function(response){
        dispatch({type: "UPDATE_CART", payload: response.data})
      })
      .catch(function(err){
        dispatch({type: "UPDATE_REJECTED", payload: "Error when updated the cart"})
      })
  }

  // return {
  //   type: "UPDATE_CART",
  //   payload: cartUpdate
  //
  // }
}
