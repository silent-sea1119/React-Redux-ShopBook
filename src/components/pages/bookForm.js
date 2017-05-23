"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBook} from '../../actions/bookActions'


class BookForm extends React.Component{

handleSubmit(){
  const book = [{
    Title: this.refs.Title.value,
    Author: this.refs.Author.value,
    Category: this.refs.Category.value,
    Price: this.refs.Price.value,
  }]

  this.props.postBook(book);
}

  render(){
    return(
      <div>
        <form>
          <p>Title  <input type="text" name="Title" ref="Title"></input></p>
          <p>Anthor  <input type="text" name="Author" ref="Author"></input></p>
          <p>Category  <input type="text" name="Category" ref="Category"></input></p>
          <p>Price  <input type="text" name="Price" ref="Price"></input></p>
          <button type="Submit" value="Submit" onClick={this.handleSubmit.bind(this)}>Save</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({postBook: postBook}, dispatch);
}

export default connect(null, mapDispatchToProps)(BookForm);
