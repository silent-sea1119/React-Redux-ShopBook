"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCart, getCart} from '../../actions/cartActions';
import {Modal, Button, ButtonGroup, Col, Row, Panel, Label} from'react-bootstrap';

class Cart extends React.Component{

  componentDidMount(){
    this.props.getCart(); // dispatching the getcart action just after the component cart is mount.
  }

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
    return this.props.updateCart(_id, 1, this.props.cart);
  }


  onDecrement(_id, qty){
    if (qty > 1){
      return this.props.updateCart(_id, -1, this.props.cart);
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
        <Panel key={cartItem._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h4>{cartItem.title}</h4><span>    </span>
            </Col>
            <Col xs={12} sm={2}>
              <h5>CHF  {cartItem.price}.-</h5>
            </Col>
            <Col xs={12} sm={2}>
              <h5>qty <Label bsStyle="success">{cartItem.quantity}</Label></h5>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup>
                <Button onClick={this.onIncrement.bind(this, cartItem._id)} bsStyle="default" bsSize="small">+</Button>
                <Button onClick={this.onDecrement.bind(this, cartItem._id, cartItem.quantity)} bsStyle="default" bsSize="small">-</Button><span>     </span>
                <Button onClick={this.onDelete.bind(this, cartItem._id)} bsStyle="danger" bsSize="small"> Delete </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    }, this)

    return (
      <Panel header="Cart" bsStyle="primary" style={{marginBottom: '100px'}}>
      <h3> Shoping Cart </h3>
        {cartItemList}
        <Row >
          <Col xs={12}>
          <h5>Total Amount: <strong>{this.props.totalAmount}</strong> CHF</h5>
          <Button onClick={this.open.bind(this)} bsStyle="success" bsSize="small">PROCEED TO CHECKOUT</Button>
            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Thank You!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Your order has been saved!</h4>
                  <p>You ll receive an email confirmation</p>
              </Modal.Body>
              <Modal.Footer>
                <h4> Nbr of Product: {this.props.totalQty} </h4>
                <h4> Total CHF: <strong>{this.props.totalAmount}</strong>.- CHF </h4>
                <Button onClick={this.close.bind(this)}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Panel>
    )
  }


  renderEmptyCart(){
    return (<div></div>)
  }


}



function mapStateToProps(state){
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQty: state.cart.totalQty
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteCartItem: deleteCartItem,
    updateCart: updateCart,
    getCart: getCart
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
