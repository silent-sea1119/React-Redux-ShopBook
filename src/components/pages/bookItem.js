"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addToCart from '../../actions/cartActions';


class BookItem extends React.Component{

  handleAddToCart(){
    const cartData = [...this.props.cart, {
      id: this.props.id,
      title: this.props.title,
      author: this.props.author,
      category: this.props.category,
      price: this.props.price,
    }]

  // dispatch the action
   this.props.addToCart(cartData);
   }

  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        <h5>{this.props.author}</h5>
        <h4>{this.props.category}</h4>
        <h3>{this.props.price}</h3>
        <button onClick={this.handleAddToCart.bind(this)}> add to Cart </button>
      </div>

    );
  }
}
function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addToCart: addToCart}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
