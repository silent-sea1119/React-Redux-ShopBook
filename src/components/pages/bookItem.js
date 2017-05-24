"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addToCart from '../../actions/cartActions';


class BookItem extends React.Component{

  handleCart(){
    // merging the actual state with the new object and the this.props.xxx are accesible because of the cascading from bookList.js
    const book = [...this.props.cart, {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price,
    }]

  // dispatch the action
   this.props.addToCart(book);
   }

  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        <h5>{this.props.description}</h5>
        <h3>{this.props.price}</h3>
        <button onClick={this.handleCart.bind(this)}> add to Cart </button>
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
