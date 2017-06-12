"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart, updateCart} from '../../actions/cartActions';
import {Well, Row, Col, Button} from 'react-bootstrap';


class BookItem extends React.Component{

  handleCart(){
    // merging the actual state with the new object and the this.props.xxx are accesible because of the cascading from bookList.js
    const book = [...this.props.cart, {
      _id: this.props._id,
      title: this.props.title,
      description: this.props.description,
      price: this.props.price,
      quantity: 1
    }];

  ///////////////////////////////////////////////////////
  // dispatch the action and add the book to the cart //
  /////////////////////////////////////////////////////

  // Checking if cart is empty or not by checking the length of the cart array

    if(this.props.cart.length > 0){
      // the cart is not empty
      let _id = this.props._id;

      // we check if the _id of the book we addToCart is inside the cart array
      let cartIndex = this.props.cart.findIndex(function(cart){
        return cart._id === _id;
      });

      if (cartIndex === -1){
        // the index is not in the cart Array so we add the book to the cart
        this.props.addToCart(book);
      } else {
        // the index is in the cart array so we update the quantity dispatching the updateCart() action creator
        this.props.updateCart(_id, 1);
      }

    } else {
      // cart is empty
      this.props.addToCart(book);
    }

  }

  render(){
    return(
      <Well>
        <Row>
          <Col xs={12}>
            <h2>{this.props.title}</h2>
            <h5>{this.props.description}</h5>
            <h3>{this.props.price}</h3>
            <Button onClick={this.handleCart.bind(this)} bsStyle="primary"> add to Cart </Button>
          </Col>
        </Row>
      </Well>

    );
  }
}
function mapStateToProps(state){
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart: addToCart,
    updateCart: updateCart
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
