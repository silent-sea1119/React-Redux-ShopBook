"use strict"

//CART REDUCERS
export function cartReducers(state={cart:[]}, action){
  switch (action.type) {

    case "ADD_TO_CART":
      return {...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty
      }
      break;

    case "DELETE_CART_ITEM":
      return {...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty,
        }
      break;

    case "UPDATE_CART":

      return {...state,
        cart: action.payload,
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty,
      };
      break;
  }
  return state;
}

  //CALCULATE TOTALS AND QUANTITY
  export function totals(payloadArr){

    // CALCULATE TOTAL
    const totalAmount = payloadArr.map(function(cartArray){
      return cartArray.price * cartArray.quantity;
    }).reduce(function (a, b){
      return a + b;
    }, 0); // start suming from valeur initial 0


    // CALCULATE QUANTITY
    const totalQty = payloadArr.map(function(qty){
      return qty.quantity;
    }).reduce(function(a , b){
      return a + b;
    }, 0);


    return {
      amount: totalAmount.toFixed(2),
      qty: totalQty
    }
  }

////////////////////
//.reduce Methode//
//////////////////

//arr.reduce(callback) or arr.reduce(callback, valeurInitiale)
// exemple 1
//[0, 1, 2, 3, 4].reduce(
//  (accumulateur, valeurCourante) => accumulateur + valeurCourante;
//);
// exemple 2
//[0, 1, 2, 3, 4].reduce(function(accumulateur, valeurCourante){
//  return accumulateur + valeurCourante;
//}, 10);
