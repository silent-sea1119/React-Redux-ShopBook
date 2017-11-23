"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBook, deleteBook, getBooks, resetButton} from '../../actions/bookActions';
import {MenuItem, InputGroup, DropdownButton, Image, Col, Row, FormGroup, FormControl, Label, ControlLabel, Panel, Button, Well} from 'react-bootstrap';
import {findDOMNode} from 'react-dom';
import axios from 'axios';


class BookForm extends React.Component{

constructor(){
  super();
  this.state={
    images: [{}],
    img: ""
  }
}

componentDidMount(){
  this.props.getBooks();
  //get image from api
  axios.get('/api/images')
    .then(function(response){
      this.setState({images: response.data});
    }.bind(this))
    .catch(function(err){
      this.setState({images: 'error loading image from the apiServer', img: ''});
    }.bind(this))

}

handleSubmit(){
  const book = [{
    title: findDOMNode(this.refs.title).value,
    description: findDOMNode(this.refs.description).value,
    images: findDOMNode(this.refs.images).value,
    price: findDOMNode(this.refs.price).value
  }]

  this.props.postBook(book);
}

onDelete(){
  let bookId = findDOMNode(this.refs.delete).value;
  this.props.deleteBook(bookId);

}

handleSelect(img){
  this.setState({
    img: '/images/'+ img
  })
}

resetForm(){
  // dispatch the action resetButton
  this.props.resetButton();

  this.refs.title.value='';
  this.refs.description.value='';
  this.setState({img:''});
  this.refs.price.value='';

}

  render(){

    const booksList = this.props.books.map(function(booksArr){
      return (
        <option key={booksArr._id}> {booksArr._id} </option>
      )
    });

    const imgList = this.state.images.map(function(imgArr, i){
      return (
        <MenuItem key={i} eventKey={imgArr.name} onClick={this.handleSelect.bind(this, imgArr.name)}>{imgArr.name}</MenuItem>
      )
    }, this);

    return(
      <Well>
        <Row>
          <Col xs={12} sm={6}>
            <Panel>
              <FormGroup>
                <ControlLabel>Select a book cover</ControlLabel>
                <FormControl type="text" ref="images" value={this.state.img}/>
                  <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon" title="Select an Image" bsStyle="primary">
                    {imgList}
                  </DropdownButton>
              </FormGroup>
              <Image src={this.state.img} responsive/>
            </Panel>
          </Col>

          <Col xs={12} sm={6}>
            <Panel>
              <FormGroup controlId="title" validationState={this.props.validation}>
                <ControlLabel>Title</ControlLabel>
                <FormControl type="text" name="title" ref="title" placeholder='Enter the book title' /><FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="description" validationState={this.props.validation}>
                <ControlLabel>Description</ControlLabel>
                <FormControl type="text" name="description" ref="description" placeholder='Enter the book description'/><FormControl.Feedback/>
              </FormGroup>
              <FormGroup controlId="price" validationState={this.props.validation}>
                <ControlLabel>Price</ControlLabel>
                <FormControl type="text" name="price" ref="price" placeholder='Enter the book price'/><FormControl.Feedback/>
              </FormGroup>
              <Button onClick={(!this.props.msg)?(this.handleSubmit.bind(this)):(this.resetForm.bind(this))} bsStyle={(!this.props.style)?("primary"):(this.props.style)}>{(!this.props.msg)?('Save book'):(this.props.msg)}</Button>
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
          </Col>

        </Row>
    </Well>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.books,
    msg: state.books.msg,
    style: state.books.style,
    validation: state.books.validation
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postBook,
    deleteBook,
    getBooks,
    resetButton
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
