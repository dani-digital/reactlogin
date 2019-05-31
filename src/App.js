import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import './App.css';
import Loginscreen from './loginscreen';
import DashBoard from './dashboard';
//import axios from 'axios'

injectTapEventPlugin();


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
if(response.data.code == 200){
  console.log("Login successfull");
  const dashboard=[];
  dashboard.push(<DashBoard appContext={self.props.appContext}/>)
  self.props.appContext.setState({loginPage:[],dashboard:dashboard})
  }

  const style = {
    margin: 15,
  };

export default App;