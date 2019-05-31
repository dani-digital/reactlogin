import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import DashBoard from './dashboard';

const apiBaseUrl = "https://random-acts0519.herokuapp.com/";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
        email:'',
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
                   hintText="Enter your Email"
                   floatingLabelText="Email"
                   onChange = {(event,newValue) => this.setState({email:newValue})}
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
    this.state={
      email:'',
      password:'',
      menuValue:1,
      //loginComponent:localloginComponent,
      loginRole:'name'
    }
  
  function handleClick(event){
    const apiBaseUrl = "https://random-acts0519.herokuapp.com/";
    const self = this;
    const payload={
    "email":this.state.email,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    const dashboard=[];
    dashboard.push(<DashBoard appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],dashboard:dashboard})
    }
    else if(response.data.code == 204){
    console.log("Email password do not match");
    alert("email password do not match")
    }
    else{
    console.log("Email does not exists");
    alert("Email does not exist");
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
