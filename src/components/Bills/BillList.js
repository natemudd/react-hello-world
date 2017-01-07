import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const BillList = ({bills}) => {  
  return (
      <div>
        {bills.map(bill => 
          
            <div key={bill.id}>
              <Paper zDepth={2}>
                <Card>
                  <CardTitle title={bill.bill_id + ": " +bill.official_title} />
                  <CardHeader
                    title={bill.sponsor.first_name + " " + bill.sponsor.last_name}
                    subtitle={bill.sponsor.title}
                    avatar="http://www.material-ui.com/images/jsa-128.jpg"
                    actAsExpander={true}
                    showExpandableButton={true}
                  />
                </Card>
              </Paper>
            </div>
        )}
      </div>
      
      
  );
};

BillList.propTypes = {  
  bills: PropTypes.array.isRequired
};

export default BillList;  

