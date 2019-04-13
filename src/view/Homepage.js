import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Logo from "../logo.png";
import Axios from "../axios/Axios";
import DiscussionAll from "../components/HomeComponent/DiscussionAll";
import EventHome from "../components/HomeComponent/EventHome";
import ChallengeHome from "../components/HomeComponent/ChallengeHome";
import LoginModal from "../components/Modal/LoginModal";
import SignUpMOdal from "../components/Modal/SignUpModal";
import Stepper from '../components/HomeComponent/VerticalLinearStepper';
import { Dialog } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    backgroundColor: "#FFFFFF",
    dispaly: "flex",
    paddingTop: 5,
    paddingBottom: 5,
    [theme.breakpoints.only("xl")]: {
      paddingLeft: 400,
      paddingRight: 400
    },

    [theme.breakpoints.only("lg")]: {
      paddingLeft: 300,
      paddingRight: 300
    },

    [theme.breakpoints.only("md")]: {
      paddingLeft: 150,
      paddingRight: 150
    },

    [theme.breakpoints.only("sm")]: {},

    [theme.breakpoints.only("xs")]: {}
  },

  pcDiv: {
    paddingTop: 100,

    [theme.breakpoints.only("xl")]: {
      paddingLeft: 250,
      paddingRight: 120
    },
    [theme.breakpoints.only("lg")]: {
      paddingLeft: 220,
      paddingRight: 100
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: 100,
      paddingRight: 30
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },

  mobileDiv: {
    paddingTop: 100,
    paddingLeft: 10,
    paddingRight: 10,
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  logButton: {
    marginLeft: "auto"
  },

  eventPcDiv: {
    backgroundColor: "#fdfdfd",
    borderRadius: 15,
    padding: 10,
    marginTop: 33
  },

  discussPcDiv: {
    paddingRight: 20
  }
});

class Homepage extends Component {
  state = {
    Eventdata: [],
    id: "",
    Challengedata: [],
    discussions: [],
    openLogin: false,
    openSignUp: false,
    user: {},
    stepperdialog:true
  };

  componentDidMount = () => {
    let that = this;

    Axios.home((err, data) => {
      let discussions = [];
      if (data) {
        data.discussions.forEach(discussion => {
          let today = new Date();
          let submissionday = new Date(Number(discussion.submitted_at * 1000));
          let diffMs = today - submissionday; 
          let diffDays = Math.floor(diffMs / 86400000); 
          let diffHrs = Math.floor((diffMs % 86400000) / 3600000); 
          let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
          let timeline =
            diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes";
          let d = {
            user_image: data.pic + discussion.subscriber_pic,
            username: discussion.name,
            timeline: timeline,
            usertype: "Student",
            reward_ammount: discussion.problem_cowry,
            problem_title: discussion.hard_level,
            problem_image: data.dispic + discussion.problem_img,
            problem_description: discussion.problem
          };
          discussions.push(d);
        });
        that.setState({ discussions: discussions });

        let Eventdata = [];
        data.events.forEach((event, i) => {
          let e = {
            id: event.event_id,
            location: event.event_name,
            topic: event.sub_text,
            start: new Date(event.event_start_from).toLocaleDateString(),
            end: new Date(event.event_end_at).toLocaleDateString(),
            cost: event.event_price
          };
          Eventdata.push(e);
        });
        that.setState({ Eventdata: Eventdata });
        let Challengedata = [];
        data.challenges.forEach((challenge, i) => {
          let c = {
            id: challenge.challenge_id,
            challengetype: challenge.challenge_name,
            topic: challenge.sub_text,
            quantity: challenge.number_of_exam,
            cost: challenge.challenge_price
          };
          Challengedata.push(c);
        });
        that.setState({ Challengedata: Challengedata });
      }
    });
  };
  handleOpen = () => {
    this.setState({ openLogin: !this.state.openLogin });
  };
  handleOpenSignUp = () => {
    this.setState({
      openLogin: !this.state.openLogin,
      openSignUp: !this.state.openSignUp
    });
  };
  handleCloseSignUp = () => {
    this.setState({ openSignUp: !this.state.openSignUp });
  };
  handleLogin = (phone_number, password) => {
    Axios.loginPathshala(phone_number, password, (err, data) => {
      console.log(data, phone_number, password);
      if (data.status) {
        this.setState({
          user: data.userdata,
          id: data.userdata.subscriber_id,
          openLogin: !this.state.openLogin
        },()=>{
          this.props.login(this.state.id);
        });    
      }
    });
  };
  handleSignup = (name, phone_number, password) => {
    Axios.signupPathshala(
      name,
      phone_number,
      password,
      password,
      (err, data) => {
        if (data.status) {
          this.setState({
            id: data.id,
            openSignUp: !this.state.openSignUp
          },()=>{
            this.props.login(this.state.id);
          });  
        }
      }
    );
  };

  openLoginModal = () => {
    this.handleOpen();
  };

  handleStepperDialogClose=()=>{
    this.setState({stepperdialog:false});
  }
  render() {
    const { classes } = this.props;
    const { Eventdata, Challengedata } = this.state;

    return (
      <div style={{ backgroundColor: "#E9EBEE" }}>
        <div>
          <SignUpMOdal
            open={this.state.openSignUp}
            handleClose={this.handleCloseSignUp}
            handleSignUp={this.handleSignup}
          />
          <LoginModal
            open={this.state.openLogin}
            handleClose={this.handleOpen}
            handleLogin={this.handleLogin}
            handleSignup={this.handleOpenSignUp}
          />
          <AppBar className={classes.appBar} position="fixed" color="default">
            <Toolbar>
              <img src={Logo} alt="logo" width="156" height="65" />
              <Button
                variant="outlined"
                color="primary"
                className={classes.logButton}
                onClick={this.handleOpen}
                style={{ textTransform: "none" }}
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>

          <div className={classes.pcDiv}>
            <Grid container direction="row">
              <Grid item xs={7} className={classes.discussPcDiv}>
                <DiscussionAll
                  onClickInput={this.openLoginModal}
                  discussions={this.state.discussions}
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right", marginTop: 10 }}
                  onClick={this.openLoginModal}
                >
                  See All
                </Button>
              </Grid>
              <Grid item xs={5}>
                <Grid container justify="center">
                  <p>Events</p>
                </Grid>
                <div className={classes.eventPcDiv}>
                  {Eventdata.map(data => (
                    <EventHome
                      eventData={data}
                      onJoinClick={this.openLoginModal}
                    />
                  ))}
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right" }}
                  onClick={this.openLoginModal}
                >
                  See All
                </Button>
                <Grid container justify="center">
                  <p>Challenges</p>
                </Grid>
                <div className={classes.eventPcDiv}>
                  {Challengedata.map(data => (
                    <ChallengeHome
                      challengedata={data}
                      onJoinClick={this.openLoginModal}
                    />
                  ))}
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right", marginBottom: 70 }}
                  onClick={this.openLoginModal}
                >
                  See All
                </Button>
              </Grid>
            </Grid>
          </div>

          <div className={classes.mobileDiv}>
            <DiscussionAll
              onClickInput={this.openLoginModal}
              discussions={this.state.discussions}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ float: "right", marginTop: 15 }}
              onClick={this.openLoginModal}
            >
              See All
            </Button>
            <Grid container justify="center">
              <p>Events</p>
            </Grid>
            <div className={classes.eventPcDiv}>
              {Eventdata.map(data => (
                <EventHome eventData={data} onJoinClick={this.openLoginModal} />
              ))}
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{ float: "right", marginTop: 15 }}
              onClick={this.openLoginModal}
            >
              See All
            </Button>
            <Grid container justify="center">
              <p>Challenges</p>
            </Grid>
            <div className={classes.eventPcDiv}>
              {Challengedata.map(data => (
                <ChallengeHome
                  challengedata={data}
                  onJoinClick={this.openLoginModal}
                />
              ))}
            </div>
            <Button
              variant="contained"
              color="primary"
              style={{ float: "right", marginTop: 15, marginBottom: 70 }}
              onClick={this.openLoginModal}
            >
              See All
            </Button>
          </div>
        </div>
        <Dialog 
          open={this.state.stepperdialog}
          onClose={this.handleStepperDialogClose}
        >
          <Stepper closeDialog={this.handleStepperDialogClose}/>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Homepage);
