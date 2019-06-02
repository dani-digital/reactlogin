import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './login';
import './App.css';


class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      username:'',
      email:'',
      password:''
    }
  
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event){
    const apiBaseUrl = "https://random-acts0519.herokuapp.com/api/";
    console.log("values",this.state.name,this.state.username,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    const self = this;
    const payload={
    "name": this.state.name,
    "username":this.state.username,
    "email":this.state.email,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
      console.log("registration successful");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not registered yet? Register Now!";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="topbar"> 
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter a User Name"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

  


const style = {
  margin: 15,
};

export default Register;