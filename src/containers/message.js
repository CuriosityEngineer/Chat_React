import React from 'react';
import TimeAgo from 'react-timeago';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Message extends React.Component{
  render(){
    return(
      <div>
        <Card>
          <CardText>
            <div style={styles.wrapper}>
              <Chip style={styles.chip}>
                {this.props.username}
              </Chip>
            </div>
            <p>{this.props.text}</p>
            <h6><em><TimeAgo date={this.props.createdAt}/></em></h6>
          </CardText>
        </Card>
        <br/>
      </div>
    );
  }
}

export default Message;
