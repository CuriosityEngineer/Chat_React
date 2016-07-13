import React from 'react';
import _ from 'lodash';
import ColorSet from '../styles/ColorSet';
import Fonts from '../styles/Fonts';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class SetUsername extends React.Component{
  constructor(props) {
   super(props);

   this.baseStyle = _.merge({
     backgroundColor: ColorSet.blueGrey,
     color: ColorSet.darkBlue,
     fontFamily: Fonts.sansSerif,
     position: "fixed",
     top: 93,
     left: 0,
     right: 0,
     margin: 0,
     padding: "5px 10px",
     boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
   }, props.style || {});
 }
  onSubmit(event){
    event.preventDefault();

    let newUser = this.refs.newUsername.value;
    console.log("Registering as: ", newUser);

    this.props.onChange(newUser);
  }

  renderUserForm(){
    return(
      <div style={ this.baseStyle}>
      <form onSubmit={this.onSubmit.bind(this)}>
        <input ref='newUsername' type='text' placeholder='What is your name?'/>
        <input type='submit' value='register'/>
      </form>
      </div>
    )
  }

  resetUser(event){
    event.preventDefault();
    this.props.onChange("guest");
  }

  renderGreeting() {
    return(
      <div style={ this.baseStyle}>
      <div style={{float: 'left', width: '200'}}>
      <h3>Hi, {this.props.username}!</h3>
      </div>
      <div style={{float: 'right', paddingTop:15}}>
      <RaisedButton label="Not You?"  onClick={ this.resetUser.bind(this)}/>
      </div>
      </div>
    );
  }

  render(){
    if (this.props.username == "guest"){
      return this.renderUserForm();
    }else {
      return this.renderGreeting();

    }

  }
}

export default SetUsername;
