import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import DashBoard from './dashboard';
import './App.css';


const apiBaseUrl = "https://random-acts0519.herokuapp.com/api/";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:''
        }
       }
      render() {
          return (
            <div>
              <MuiThemeProvider>
                <div>
                <AppBar
                   title="Login"
                 />
                 <TextField
                   hintText="Enter your username"
                   floatingLabelText="Username"
                   onChange = {(event,newValue) => this.setState({username:newValue})}
                   />
                 <br/>
                   <TextField
                     type="password"
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
    // this.state={
    //   email:'',
    //   password:'',
    //   menuValue:1,
    //   //loginComponent:localloginComponent,
    //   loginRole:'name'
    // }
  
  function handleClick(event){
    const apiBaseUrl = "https://random-acts0519.herokuapp.com/api/";
    const self = this;
    const payload={
    "username":this.state.username,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
      if(response.data.code === 200){
      console.log("Login successful");
      this.props.history.push('/dashboard')
       const dashboard=[];
       dashboard.push(<DashBoard appContext={self.props.appContext}/>)
       self.props.appContext.setState({loginPage:[],dashboard:dashboard})
      }
      else if(response.data.code === 204){
      console.log("username and password do not match");
      alert("username and password do not match")
      }
      else{
      console.log("username does not exists");
      alert("username does not exist");
      }
    })
    .catch(function (error) {
    console.log(error);
    });
    }
  

    // this.setState({menuValue:value,
    //                loginComponent:localloginComponent,
    //                loginRole:loginRole})
  
  // render() {
  //   return (
  //     <div>
  //       <MuiThemeProvider>
  //       <AppBar
  //            title="Login"
  //          />
  //       </MuiThemeProvider>
        
  //       {this.state.loginComponent}
  //     </div>
  //   );
  // }


const style = {
  margin: 15,
};

export default Login;
