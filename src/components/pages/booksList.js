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
    this.props.getBooks(
      [{
        id: 1,
        title: "les 4 fantastique",
        description: "Herge",
        price: 29.5
      },
      {
        id: 2,
        title: "la belle et la bete",
        description: "Disney",
        price: 18
      },]
    );
  }

  render(){
    let booksList = this.props.books.map(function(booksArr){
      return(
        <div key={booksArr.id}>
          <BookItem
            id= {booksArr.id}
            title= {booksArr.title}
            description= {booksArr.description}
            price= {booksArr.price}
          />
        </div>
      )
    })

    return(
      <div>
        <Cart />
        <h1> List of Book </h1>
        {booksList}
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
