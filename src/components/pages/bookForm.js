"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBook, deleteBook} from '../../actions/bookActions';
import {MenuItem, InputGroup, DropDownButton, Image, Col, Row, FormGroup, FormControl, Label, ControlLabel, Panel, Button, Well} from 'react-bootstrap';
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
  //get image from api
  axios.get('/api/image/')
    .then(function(response){
      this.setState({images: response.data});
    }.bind(this))
    .catch(function(err){
      this.setState({images: 'error loading image from the apiServer', img: ''});
    }.bind(this))

}

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
        <Row>
          <Col>
            <Panel>
              <InputGroup>
                <FormControl type="text" ref="image" value""/>
                  <DropdownButton componentClass={InputGroup.Button} id="input-dropdown-addon" title="Select an Image" bsStyle="primary">
                    {imgList}
                  </DropdownButton>
              </InputGroup>
              <Image src="" responsive/>
            </panel>
          </Col>
          <Col>
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
          </Col>
        </Row>

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
