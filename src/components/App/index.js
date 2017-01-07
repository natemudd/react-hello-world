// src/components/App/index.js

import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BillCard from '../common/BillCard';
import MainAppBar from '../common/MainAppBar';
import classnames from 'classnames';
//import globalStyles from '../assets/styles/global.css';

injectTapEventPlugin();

class App extends Component { 

  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <MuiThemeProvider>
          <MainAppBar />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <BillCard />
        </MuiThemeProvider>
      </div>
      
    );
  }
}

export default App;
