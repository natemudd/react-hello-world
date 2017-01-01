import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

export default class BillCard extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


 render() {
    return ( 
    <div>
    <Dialog
      title="S. 1104: A bill to extend the deadline for commencement of construction of a hydroelectric project involving ..."
      modal={false}
      open={this.state.open}
      onRequestClose={this.handleClose}
      autoScrollBodyContent={true}
    >
          The actions in this window were passed in as an array of React objects.
    </Dialog>
    <Paper zDepth={2}>
    <Card>
      <CardTitle 
        title="S. 1104: A bill to extend the deadline for commencement of construction of a hydroelectric project involving ..." 
        />
      <CardHeader
        title="Steve Daines"
        subtitle="Junior Senator from Montana Republican"
        avatar="http://www.material-ui.com/images/jsa-128.jpg"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <p><strong>Introduced:</strong> Apr 27, 2015</p>
        <p><strong>Status:</strong> Ordered Reported by Committee on Jul 30, 2015</p>
        <p><strong>Summary:</strong><br />This bill authorizes the Federal Energy Regulatory Commission (FERC), upon the request of the licensee for the project numbered 12478-003 (Gibson Dam, Montana), to extend the time period during which the licensee is required to commence construction for six years beginning on the date of expiration of the previous extension issued by FERC before enactment of this Act.</p>
      </CardText>
      <CardActions>
        <FlatButton onTouchTap={this.handleOpen} label="Details" />
        <FlatButton label="Activity" />
      </CardActions>
    </Card>
    </Paper>
  </div>
 );
  }
}