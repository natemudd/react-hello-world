// src/actions/billActions.js

import * as types from './actionTypes';
import billApi from '../api/billApi';

export function loadBills() {  
  return function(dispatch) {
    return billApi.getAllBills().then(bills => {
      dispatch(loadBillsSuccess(bills));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadBillsSuccess(bills) {  
  return {type: types.LOAD_BILLS_SUCCESS, bills};
}