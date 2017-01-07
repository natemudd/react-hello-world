import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Login extends React.Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="About" href="/about/" />
    <Divider />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

export default class MainAppBar extends React.Component {

  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

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
{/*
                <Toggle
                  label="Logged"
                  defaultToggled={true}
                  onToggle={this.handleChange}
                  labelPosition="right"
                  style={{margin: 20}}
                />
*/}
                <AppBar 
                  title="Project Pateo"
                  zDepth="{2}"
                  onLeftIconButtonTouchTap={this.handleToggle.bind(this)} 
                  iconElementRight={this.state.logged ? <Logged /> : <Login />} />
                </div>
            );
        }
    }

    MainAppBar.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};