"use strict"

import React from 'react';
import {connect} from 'react-redux';

class Cart extends React.Component{

  render(){
    if (this.props.cart[0]){
      return this.renderCart();
    } else {
      return this.renderEmptyCart();
    }
  }


  function renderCart(){
    
    const cartItemList = this.props.cart.map(function(cartItem)){
      return(
        <div>
          <h6>{cartItem.id}</h6>
          <h6>{cartItem.title}<h6>
        </div>
      )
    }

    return (
      <div>
        {cartItemList}
      </div>
    )
  }


  function renderEmptyCart(){
    return (<div></div>)
  }


}


function mapStateToProps(state){
  cart: state.cart.cart
}

export default connect(mapStateToProps)(Cart);
