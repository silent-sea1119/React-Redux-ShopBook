"use strict"

import React from 'react';
import Menu from './menu';
import Footer from './footer';
import {bindActionCreators} from 'redux';
import {getCart} from '../actions/cartActions';
import {connect} from 'react-redux';



class Main extends React.Component{

  componentDidMount(){
    this.props.getCart();
  }

  render(){
    return(
      <div>
        <Menu />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    totalQty: state.cart.totalQty
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getCart: getCart
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Main);
