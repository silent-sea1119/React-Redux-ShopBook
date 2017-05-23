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
        <div key={cartItem.id}>
          <h6>{cartItem.title}</h6>
          <h6>{cartItem.price}</h6>
        </div>
      )
    })

    return (
      <div>
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
