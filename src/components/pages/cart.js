"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCart} from '../../actions/cartActions';
import {Modal, Button} from'react-bootstrap';

class Cart extends React.Component{

  constructor(){
    super();
    this.state = {
      showModal: false
    }
  }

  open(){
    this.setState({
      showModal: true
    })
  }

  close(){
    this.setState({
      showModal: false
    })
  }


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


  onIncrement(_id){
    return this.props.updateCart(_id, 1);
  }


  onDecrement(_id, qty){
    if (qty > 1){
      return this.props.updateCart(_id, -1);
    }else{

    }
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
          <button onClick={this.onIncrement.bind(this, cartItem._id)}>+</button>
          <button onClick={this.onDecrement.bind(this, cartItem._id, cartItem.quantity)}>-</button>
          <button onClick={this.onDelete.bind(this, cartItem._id)}> Delete </button>
        </div>
      )
    }, this)

    return (
      <div>
      <h3> Shoping Cart </h3>
        {cartItemList}
        <h5>Total Amount:</h5>
        <button onClick={this.open.bind(this)}>Proceed to Checkout</button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Thank You!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Your order has been saved!</h4>
              <p>You ll receive an email confirmation</p>
          </Modal.Body>
          <Modal.Footer>
            <h4> Total: CHF </h4>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
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
