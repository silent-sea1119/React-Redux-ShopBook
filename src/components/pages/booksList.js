"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/bookActions';

class BooksList extends React.Component{
  componentDidMount(){
    // dispatch the action getBooks as soon as the component BookList is loaded
    this.props.getBooks();
  }
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
      <h1> List of Book </h1>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({getBooks: getBooks}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (BooksList);
