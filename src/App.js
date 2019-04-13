import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import HomePage from "./view/Homepage";
import MainPage from "./view/MainPage";
import "./app.css";


class App extends React.Component {
  state={
    isLoggedIn: false,
    id: null,
  }

  handleLogin=(id)=>{
    this.setState({isLoggedIn: true, id: id});
  }

  handleLogout=()=>{
    this.setState({isLoggedIn: false, id: null});
  }

  render(){
    return(
      <div>
        {
          this.state.isLoggedIn
          ?<MainPage logout={this.handleLogout} uid={this.state.id}/>
          :<HomePage login={this.handleLogin}/>
        }
      </div>
    );
  }
};

export default App;
