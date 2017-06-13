"use strict"

import React from 'react';
import Menu from './menu';
import Footer from './footer';
import BookList from './pages/booksList';

class Main extends React.Component{
  render(){
    return(
      <div>
        <Menu />
        <BookList />
        <Footer />
      </div>

    )
  }
}

export default Main;
