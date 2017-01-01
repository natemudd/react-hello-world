import React from 'react';
// import { Drawer, AppBar, MenuItem} from 'material-ui'
// This is faster & creates smaller builds:
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'    

export default class MainAppBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {open:false};
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
    console.log("open")
   }
  handleClose() { this.setState({open: false}); }
        render() {

            return (
                <div>
                <Drawer
                  docked={false}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                  >

                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Current Status</MenuItem>
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Type</MenuItem>
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Party of Sponsor</MenuItem>
                </Drawer>

                <AppBar   title="Project Pateo"
            onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
                </div>
            );
        }
    }

    MainAppBar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};