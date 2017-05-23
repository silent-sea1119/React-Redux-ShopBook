"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import postBook from '../../actions/bookActions';


class BookForm extends React.Component{

handleSubmit(){
  let book = [{
    title: this.refs.title.value,
    description: this.refs.description.value,
    price: this.refs.price.value,
  }]

  this.props.postBook(book);
}

  render(){
    return(
      <div>
        <form>
          <p>Title  <input type="text" name="title" ref="title"></input></p>
          <p>Description  <input type="text" name="description" ref="description"></input></p>
          <p>Price  <input type="text" name="price" ref="price"></input></p>
          <button type="Submit" value="Submit" onClick={this.handleSubmit.bind(this)}>Save</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({postBook}, dispatch);
}

export default connect(null, mapDispatchToProps)(BookForm);
