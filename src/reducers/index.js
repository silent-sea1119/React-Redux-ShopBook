"use strict"

import {combineReducers} from 'redux';
import bookReducers from './bookReducers';
import cartReducers from './cartReducers';

const allReducers = combineReducers({
  books: bookReducers,
  cart: cartReducers
});

export default allReducers;
