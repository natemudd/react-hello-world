import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import BillListPage from './components/Bills/BillListPage';

export default ( 
 <Router> 
  <Route path="/" component={App} />
   <Route path="/bills" component={BillListPage} />
   <Route path="/about" component={About} />
   <Route path="*" component={NotFound} />
  </Router>
);

