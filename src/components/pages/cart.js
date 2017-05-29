"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCart} from '../../actions/cartActions';

class Cart extends React.Component{

  onDelete(_id){

    // create a copy of the curent state
    let curentBookToDelete = this.props.cart;

    // determine in wich index of the books array are the id we want to delete by the methode .findIndex(callbackfn)
    let indexToDelete = curentBookToDelete.findIndex(
      function(cart){
        return cart._id === _id; // if true the book is pass as parametre in findIndex() function wich ll stock the index of this book in the variable indexToDelete
      }
    )
    //remove the book at the specified index with methode .slice() with the babel preset stage-1 methode spread operator
    let cartAfterDelete = [...curentBookToDelete.slice(0, indexToDelete), ...curentBookToDelete.slice(indexToDelete+1)]

    this.props.deleteCartItem(cartAfterDelete);
  }

  onUpdate(_id){
    // create a copy of the curent state
    const curentBookToUpdate = this.props.cart;

    // determine in wich index of the books array are the id we want to update by the methode .findIndex(callbackfn)
    const indexToUpdate = curentBookToUpdate.findIndex(function(cartItem){
        return cartItem._id === cartItem.payload._id;
      }
    )
    // we stock in a variable the object at indexToUpdate in the array curentBookToUpdate
    const objectToUpdate = curentBookToUpdate[indexToUpdate];

    // Then we stock in a new variable using babel preset stage-1 the object to update merge with the key,value we want to update
    // The key here Title is sensible to the case to be updated, if we write title : action.payload.Title
    // Another key value title ll be add to the new object (not what we want to do)
    // Writing Title like the initial object ll force to update this key by the payload value
    // ( the ... make all the work without it we ll have an object inside an object no merge ll occur)
    const newBookToUpdate = {...objectToUpdate, title: action.payload.title}

    //update the book at the specified index with methode .slice() with the babel preset stage-1 spread operator methode and append to it the newBookToUpdate
    return {books: [...curentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...curentBookToUpdate.slice(indexToUpdate+1)]}


  }

  render(){
    if (this.props.cart[0]){
      return this.renderCart()
    } else {
      return this.renderEmptyCart()
    }
  }


  renderCart(){

    let cartItemList = this.props.cart.map(function(cartItem){
      return(
        <div key={cartItem._id}>
          <h4>{cartItem.title}</h4>
          <h5>CHF. -   {cartItem.price}</h5>
          <h5>QTY {cartItem.quantity}</h5>
          <button onClick={this.onUpdate.bind(this)}>+</button>
          <button>-</button>
          <button onClick={this.onDelete.bind(this, cartItem._id)}> Delete </button>
        </div>
      )
    }, this)

    return (
      <div>
      <h3> Shoping Cart </h3>
        {cartItemList}
      </div>
    )
  }


  renderEmptyCart(){
    return (<div></div>)
  }


}



function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteCartItem: deleteCartItem,
    updateCart: updateCart
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
