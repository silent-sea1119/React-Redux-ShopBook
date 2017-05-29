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
      return {cart:[...state, ...action.payload]}
      break;
  }
  return state;
}


export default cardReducers;
