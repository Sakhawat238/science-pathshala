import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/EventNote";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Header from "../components/Header/Header";
import Header2 from "../components/Header/Header2";
import Profile from "./Profile";
import Discussion from "./Discussion";
import Events from "./Events";
import Slide from "@material-ui/core/Slide";
import Axios from "../axios/Axios";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#E9EBEE"
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#40C4FF"
  },
  pc: {
    [theme.breakpoints.down('md')]: {
      display:'none'
    }
  },
  mobile: {
    [theme.breakpoints.up('md')]: {
      display:'none'
    }
  }
});

class MainPage extends Component {
  state = {
    value: -1,
    id: null,
    coin: 0,
    exp: 0,
    user: {},
    evntTabVal:0,
  };

  handlePageChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  componentDidMount = () => {
    let that = this;
 
    this.setState({ id: this.props.uid }, () => {
      Axios.user(this.state.id, (err, data) => {
        if (!data || !data.status) {
          that.props.logout();
        } else {
          that.setState({ user: data.user, value: 0 }, () => {
          
          });
        }
      });
    });
  };
  profile = () => {
    let that = this;
    Axios.user(this.state.id, (err, data) => {
      if (!data.status) {
        that.props.logout();
      } else {
        that.setState({ user: data.user, value: 0 }, () => {
          //console.log(that.state.user);
        });
      }
    });
  };

  redirectToEventPage = (v)=>{
    this.setState({ value:2, evntTabVal:v });
  }

  handleLogout = ()=>{
    let that=this;
    Axios.logout((err,login)=>{
      console.log(login);
      if(!login){
        that.props.logout();;
      }
    })
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <div className={classes.mobile}>
          <Header
            coin={this.state.user.cowry}
            xp={this.state.user.exp_point}
            logoutclick = {this.handleLogout}
          />
        </div>
        <div className={classes.pc}>
          <Header2
            handlePageChange={this.handlePageChange}
            coin={this.state.user.cowry}
            xp={this.state.user.exp_point}
          />
        </div>
        <div className={classes.root}>
          {this.state.value === 0 && (
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
              <Discussion id={this.state.id} profile={this.profile} pageChange={this.redirectToEventPage}/>
            </Slide>
          )}
          {this.state.value === 1 && (
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
              <Profile id={this.state.id} profile={this.profile} />
            </Slide>
          )}
          {this.state.value === 2 && (
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
              <Events id={this.state.id} profile={this.profile} evntTabVal={this.state.evntTabVal} user={this.state.user}/>
            </Slide>
          )}
          <div className={classes.mobile}>
            <Tabs
              value={this.state.value}
              onChange={this.handlePageChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
              className={classes.stickToBottom}
            >
              <Tab icon={<HomeIcon />} />
              <Tab icon={<AccountCircleIcon />} />
              <Tab icon={<EventIcon />} />
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MainPage);
