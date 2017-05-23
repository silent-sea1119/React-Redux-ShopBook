"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/bookActions';
import BookItem from './bookItem';
import BookForm from './bookForm';
import Cart from './cart';



class BooksList extends React.Component{
  componentDidMount(){
    // dispatch the action getBooks as soon as the component BookList is loaded
    this.props.getBooks();
  }
  render(){
    let listBooks = this.props.books.map(function(book){
      return(
        <div key={book.id}>
          <BookItem
            id= {book.id}
            title= {book.title}
            description= {book.description}
            price= {book.price}
          />
        </div>
      )
    })

    return(
      <div>
        <Cart />
        <h1> List of Book </h1>
        {listBooks}
        <BookForm />

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
