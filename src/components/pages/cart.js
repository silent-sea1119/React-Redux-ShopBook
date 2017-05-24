"use strict"

import React from 'react';
import {connect} from 'react-redux';

class Cart extends React.Component{

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
          <button> Delete </button>
        </div>
      )
    })

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

export default connect(mapStateToProps)(Cart);
