"use strict"

import React from 'react';
import {connect} from 'react-redux';

class BooksList extends React.Component{
  render(){
    let listBooks = this.props.books.map(function(book){
      return(
        <div key={book.id}>
          <h2>{book.Title}</h2>
          <h3>{book.Author}</h3>
          <p>{book.Category}</p>
          <h2>{book.Price}</h2>
        </div>
      )
    })

    return(
      <div>
        <h1>Hello React </h1>
        {listBooks}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.books
  }
}

export default connect(mapStateToProps) (BooksList);
