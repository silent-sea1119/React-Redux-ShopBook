"use strict"

// Action creator add to cart
export function addToCart(book){
  return {
    type: "ADD_TO_CART",
    payload: book
  }

}


// Action creator delete cart item
export function deleteCartItem(cart){
  return {
    type: "DELETE_CART_ITEM",
    payload: cart
  }
}


// Action creator update cart
export function updateCart(_id, unit){
  return {
    type: "UPDATE_CART",
    _id: _id,
    unit: unit

  }
}
