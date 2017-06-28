"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/bookActions';
import BookItem from './bookItem';
import BookForm from './bookForm';
import Cart from './cart';
import {Well, Row, Col, Button, Grid} from 'react-bootstrap';



class BooksList extends React.Component{
  componentDidMount(){
    // dispatch the action getBooks as soon as the component BookList is loaded
    this.props.getBooks([]);
  }

  render(){
    let booksList = this.props.books.map(function(booksArr){
      return(
        <Col xs={12} sm={6} md={4} key={booksArr._id}>
          <BookItem
            _id= {booksArr._id}
            title= {booksArr.title}
            description= {booksArr.description}
            images= {booksArr.images}
            price= {booksArr.price}
          />
        </Col>
      )
    })

    return(
      <Grid>
        <Row>
          <Cart />
        </Row>
        <Row>
          {booksList}
        </Row>
      </Grid>
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
