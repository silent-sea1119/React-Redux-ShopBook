"use strict"

import React from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

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
       <NavItem eventKey={1} href="/about" ><Link to="/about">About</Link></NavItem>
       <NavItem eventKey={2} href="/contact" ><Link to="/contact">Contact</Link></NavItem>
     </Nav>
     <Nav pullRight>
       <NavItem eventKey={1} href="/admin" ><Link to="/admin">Admin</Link></NavItem>
       <NavItem eventKey={2} href="/shopingcart" ><Link to="/shopingcart">Your Cart</Link><Badge className="badge">{this.props.qty}</Badge></NavItem>
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
