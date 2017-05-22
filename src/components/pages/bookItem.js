"use strict"
import React from 'react';

class BookItem extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.title}</h2>
        <h5>{this.props.author}</h5>
        <h4>{this.props.category}</h4>
        <h3>{this.props.price}</h3>
      </div>

    );
  }
}

export default BookItem;
