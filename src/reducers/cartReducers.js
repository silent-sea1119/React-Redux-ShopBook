"use strict"

let cardReducers = function(state={cart:[]}, action){
  switch (action.type) {

    case "ADD_TO_CART":
      return {cart:[...state, ...action.payload]}
      break;

    case "DELETE_CART_ITEM":
      return {cart:[...state, ...action.payload]}
      break;

    case "UPDATE_CART":
      // create a copy of the curent state
      const curentBookToUpdate = [...state.cart];

      // determine in wich index of the cart array are the id we want to update by the methode .findIndex(callbackfn)
      const indexToUpdate = curentBookToUpdate.findIndex(function(book){
          return book._id === action._id;
        }
      )
      // we stock in a variable the object at indexToUpdate in the array curentBookToUpdate
      const objectToUpdate = curentBookToUpdate[indexToUpdate];

      // Then we stock in a new variable the object to update merge with the value we want to update
      // The key here quantity is sensible to the case to be updated
      // ( the ... make all the work without it we ll have an object inside an object no merge ll occur)
      const newBookToUpdate = {...objectToUpdate, objectToUpdate.quantity + action.unit}

      //stock in variable cartUpdate the cart updated at the specified index with methode .slice()with spread operator methode and append to it the newBookToUpdate
      let cartUpdate = [...curentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...curentBookToUpdate.slice(indexToUpdate+1)]}

      return {...state, cart: cartUpdate}
      break;
  }
  return state;
}


export default cardReducers;
