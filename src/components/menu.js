"use strict"

import React from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import {connect} from 'react-redux';

class Menu extends React.Component{
  render(){
    return(
      <Navbar inverse>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="/">My Books App</a>
         </Navbar.Brand>
         <Navbar.Toggle />
       </Navbar.Header>
       <Navbar.Collapse>
         <Nav>
           <NavItem eventKey={1} href="/about">About</NavItem>
           <NavItem eventKey={2} href="/contact">Contact</NavItem>
         </Nav>
         <Nav pullRight>
           <NavItem eventKey={1} href="/admin">Admin</NavItem>
           <NavItem eventKey={2} href="/cart">Your Cart<Badge className="badge">{this.props.qty}</Badge></NavItem>
         </Nav>
       </Navbar.Collapse>
     </Navbar>

    );
  }
}

function mapStateToProps(state){
  return{
    qty: state.cart.totalQty

  }
}
export default connect(mapStateToProps)(Menu);
