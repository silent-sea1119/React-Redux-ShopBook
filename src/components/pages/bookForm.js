"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBook, deleteBook} from '../../actions/bookActions';
import {FormGroup, FormControl, Label, ControlLabel, Panel, Button, Well} from 'react-bootstrap';
import {findDOMNode} from 'react-dom';


class BookForm extends React.Component{

handleSubmit(){
  let book = [{
    title: this.refs.title.value,
    description: this.refs.description.value,
    price: this.refs.price.value,
  }]

  this.props.postBook(book);
}

onDelete(){
  let bookId = findDOMNode(this.refs.delete).value;
  this.props.deleteBook(bookId);

}

  render(){

    const booksList = this.props.books.map(function(booksArr){
      return (
        <option key={booksArr._id}> {booksArr._id} </option>
      )
    })

    return(
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <p>Title  <input type="text" name="title" ref="title"></input></p>
            <p>Description  <input type="text" name="description" ref="description"></input></p>
            <p>Price  <input type="text" name="price" ref="price"></input></p>
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)} bsStyle="success">Save</Button>
        </Panel>

        <Panel style={{marginTop:'25px'}}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select a book id to delete</ControlLabel>
            <FormControl ref="delete" componentClass="select" placeholder="select">
              <option value="select">select</option>
              {booksList}
            </FormControl>
          </FormGroup>
          <Button onClick={this.onDelete.bind(this)} bsStyle="danger">Delete Book</Button>
      </Panel>
    </Well>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.books
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postBook,
    deleteBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
