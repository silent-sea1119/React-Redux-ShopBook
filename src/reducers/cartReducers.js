"use strict"

let cardReducers = function(state={cart:[]}, action){
  switch (action.type) {
    case "ADD_TO_CART":
      return {cart:[...state.cart, ...action.payload]}
      break;
    default:
  }
  return state;
}

export default cardReducers;