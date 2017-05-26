"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteCartItem} from '../../actions/cartActions';

class Cart extends React.Component{

  onDelete(_id){
    console.log("geting inside ondelete");

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
          <h5>QTY </h5>
          <button>+</button>
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
  return bindActionCreators({deleteCartItem: deleteCartItem}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
