// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';  
import configureStore from './reducers/store/configureStore';  
import { Provider } from 'react-redux';  
import { Router, browserHistory } from 'react-router';  
import Routes from './routes';
import {loadBills} from './actions/billActions';

//import './index.css';

const store = configureStore();

store.dispatch(loadBills());

ReactDOM.render(  
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>,
  document.getElementById('root')
);

{/*
ReactDOM.render(
	<Provider store={store}>
 		<Routes history={browserHistory} />
	</Provider>,
  document.getElementById('root')
);
*/}

