import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function billReducer(state = initialState.bills, action) {  
  switch(action.type) {
    case types.LOAD_BILLS_SUCCESS:
      return action.bills.results
    default: 
      return state;
  }
}