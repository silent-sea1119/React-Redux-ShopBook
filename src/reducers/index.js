"use strict"

import {combineReducers} from 'redux';
import bookReducers from './bookReducers';

const allReducers = combineReducers({
  books: bookReducers,
});

export default allReducers;
