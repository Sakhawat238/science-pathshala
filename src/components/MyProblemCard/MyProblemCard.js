import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import MyProblemCardStyles from "./MyProblemCardStyles";
import CoinPic from "./coinpic.png";
import { Button } from "@material-ui/core";
import Axios from "../../axios/Axios";

class MyProblemCard extends Component {
  state = {
    show_all: false,
    name: "",
    pic: ""
  };

  onShowAllCLick = () => {
    this.setState({ show_all: true });
  };
  componentDidMount = () => {
    let that = this;
    Axios.profile(this.props.answer_subscriber_id, (err, data) => {

      if (data) {
        that.setState({ name: data.name, pic: data.pic });
      }
    });
  };

  render() {
    const {
      classes,
      key,
      user_image,
      username,

      usertype,
      answer,
      answer_image,
      answer_time,
      answer_subscriber_id,
      reward_ammount,
      problem_level,
      problem_image,
      problem_description
    } = this.props;
    let today = new Date();
    let submissionday = new Date(Number(answer_time * 1000));
    console.log(submissionday);
    let diffMs = today - submissionday; // milliseconds between now & Christmas
    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    let timeline =
      diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes";
    //console.log(this.props, "data");
    const { show_all } = this.state;
    return (
      <div className={classes.mainDiv}>
        <Grid container justify="space-evenly" alignItems="flex-start">
          <Grid item xs={2}>
            {user_image !== "http://www.sciencepathshalabd.com/image/null" ? (
              <Avatar src={user_image} className={classes.useravatar} />
            ) : (
              <Avatar
                src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740762.jpg"
                className={classes.useravatar}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            <p className={classes.username}>{username}</p>
            <p className={classes.subtext}>{`${timeline} ago, ${usertype}`}</p>
          </Grid>
          <Grid item xs={4} className={classes.rewGrid}>
            <div style={{ display: "flex" }}>
              <p className={classes.rewardtext}>Reward:</p>
              <p className={classes.rewardammount}>{reward_ammount}</p>
              <Avatar src={CoinPic} className={classes.coinavatar} />
            </div>
          </Grid>
        </Grid>
        <div className={classes.descrpDiv}>
          {problem_image ===
          "http://www.sciencepathshalabd.com/discussion_picture/null" ? (
            <div>
              {problem_description.length < 60 ? (
                <div>
                  <p>{problem_description}</p>
                </div>
              ) : (
                <div>
                  {show_all ? (
                    <div>
                      <p>{problem_description}</p>
                    </div>
                  ) : (
                    <div>
                      <p>{`${problem_description.substring(0, 60)}.......`}</p>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.onShowAllCLick}
                        className={classes.seemorebut}
                      >
                        See more
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div>
              {problem_description.length < 60 ? (
                <div>
                  <p>{problem_description}</p>
                  {show_all ? (
                    <div>
                      <img
                        src={problem_image}
                        alt="problemimg"
                        className={classes.problemImg}
                      />
                    </div>
                  ) : (
                    <div>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.onShowAllCLick}
                        className={classes.seemorebut}
                      >
                        See more
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {show_all ? (
                    <div>
                      <p>{problem_description}</p>
                      <img
                        src={problem_image}
                        alt="problemimg"
                        className={classes.problemImg}
                      />
                    </div>
                  ) : (
                    <div>
                      <p>{`${problem_description.substring(0, 60)}.......`}</p>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.onShowAllCLick}
                        className={classes.seemorebut}
                      >
                        See more
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className={classes.solDiv}>
          <h4>Solution:</h4>
          {answer && (
            <div>
              <Grid container justify="space-evenly" alignItems="flex-start">
                <Grid item xs={2}>
                  {this.state.pic !==
                  "http://sciencepathshalabd.com/image/null" ? (
                    <Avatar
                      src={this.state.pic}
                      className={classes.useravatar}
                    />
                  ) : (
                    <Avatar
                      src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-518740762.jpg"
                      className={classes.useravatar}
                    />
                  )}
                </Grid>
                <Grid item xs={6}>
                  <p className={classes.username}>{this.state.name}</p>
                  <p className={classes.subtext}>{timeline}</p>
                </Grid>
                <Grid item xs={4} className={classes.rewGrid} />
              </Grid>
              <p>{answer}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(MyProblemCardStyles)(MyProblemCard);
