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
      // create a copy of the curent state
      let curentBookToUpdate = [...state.cart];

      // determine in wich index of the cart array are the id we want to update by the methode .findIndex(callbackfn)
      let indexToUpdate = curentBookToUpdate.findIndex(function(book){
          return book._id === action._id;
        }
      )
      // we stock in a variable the object at indexToUpdate in the array curentBookToUpdate
      let objectToUpdate = curentBookToUpdate[indexToUpdate];

      // Then we stock in a new variable the object to update merge with the value we want to update
      // The key here "quantity" of the book obkject is sensible to the case to be updated
      // ( the ... make all the work without it we ll have an object inside an object no merge ll occur)
      let newBookToUpdate = {...objectToUpdate, quantity: objectToUpdate.quantity + action.unit};

      //stock in variable cartUpdate the cart updated at the specified index with methode .slice()with spread operator methode and append to it the newBookToUpdate
      let cartUpdate = [...curentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...curentBookToUpdate.slice(indexToUpdate + 1)];

      return {...state,
        cart: cartUpdate,
        totalAmount: totals(cartUpdate).amount,
        totalQty: totals(cartUpdate).qty,
      };
      break;
  }
  return state;
}

  //CALCULATE TOTALS
  export function totals(payloadArr){
    const totalAmount = payloadArr.map(function(cartArray){
      return cartArray.price * cartArray.quantity;
    }).reduce(function (a, b){
      return a + b;
    }, 0); // start suming from index 0


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
