import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BillCard from './BillCard';
import MainAppBar from './MainAppBar';
import globalStyles from './assets/styles/global.css';

injectTapEventPlugin();

class App extends Component { 
  render() {
    return (
      <div className="App">
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
