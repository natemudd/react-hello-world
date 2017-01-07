// src/reducers/rootReducer.js

import {combineReducers} from 'redux';  
import bills from './billReducer';

const rootReducer = combineReducers({  
  // short hand property names
  bills
})

export default rootReducer; 