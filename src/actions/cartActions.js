"use strict"
import axios from 'axios';

// Action creator add to cart
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


// Action creator delete cart item
export function deleteCartItem(cart){
  return {
    type: "DELETE_CART_ITEM",
    payload: cart
  }
}


// Action creator update cart
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


  return {
    type: "UPDATE_CART",
    payload: cartUpdate

  }
}
