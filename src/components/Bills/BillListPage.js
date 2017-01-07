import React, {PropTypes} from 'react';  
import {connect} from 'react-redux'; 
import BillList from './BillList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainAppBar from '../common/MainAppBar';
import Paper from 'material-ui/Paper';
import * as billActions from '../../actions/billActions';

class BillListPage extends React.Component {  
  render() {
    return (

      <div>
      	<MuiThemeProvider>
          <MainAppBar />
    	</MuiThemeProvider>
        <MuiThemeProvider>
          {<BillList bills={this.props.bills} />}
        </MuiThemeProvider>
      </div>
    );
  }
}

BillListPage.propTypes = {  
  bills: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {  
  // state = {cats: [{id:1, name: "Maru"}, etc.]}
  return {
    bills: state.bills
  };
}

export default connect(mapStateToProps)(BillListPage);