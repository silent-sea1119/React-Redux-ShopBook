"use strict"

// add to cart Action creator
let addToCart = function(book){
  return {
    type: "ADD_TO_CART",
    payload: book
  }

}

export default addToCart;
