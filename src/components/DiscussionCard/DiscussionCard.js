import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import DiscussionCardStyles from "./DiscussionCardStyles";
import CoinPic from "./coinpic.png";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Axios from "../../axios/Axios";
import Tooltip from '@material-ui/core/Tooltip';

class DiscussionCard extends Component {
  state = {
    show_all: false,
    answer: "",
    name: "",
    pic: "",
    showanswer: false
  };
  handleAnswer = () => {
    this.setState({ showanswer: !this.state.showanswer });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    //console.log(name, event.target.value);
  };
  onShowAllCLick = () => {
    this.setState({ show_all: true });
  };
  componentDidMount = () => {
    let that = this;
    Axios.profile(this.props.answer_subscriber_id, (err, data) => {
      //console.log(data, "ans");
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
      answer,
      answer_image,
      answer_time,
      answer_subscriber_id,
      username,
      timeline,
      usertype,
      reward_ammount,
      problem_level,
      problem_image,
      problem_description,
      id
    } = this.props;
    let answertimeline;
    if (answer) {
      let today = new Date();
      let submissionday = new Date(Number(answer_time * 1000));

      let diffMs = today - submissionday; // milliseconds between now & Christmas
      let diffDays = Math.floor(diffMs / 86400000); // days
      let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
      let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
      answertimeline =
        diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes";
    }
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
              {problem_description.length < 350 ? (
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
                      <p>{`${problem_description.substring(0, 350)}.......`}</p>
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
              {problem_description.length < 350 ? (
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
                      <p>{`${problem_description.substring(0, 350)}.......`}</p>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.mPCimgbut}
            onClick={this.handleAnswer}
          >
            {!this.state.showanswer && answer ? (
              <Tooltip title="Are you sure?" placement="top"><div>Show Answer</div></Tooltip>
            ) : !this.state.showanswer && !answer ? (
              <Tooltip title="Please provide correct answer" placement="top"><div>Submit Answer</div></Tooltip>
            ) : this.state.showanswer && answer ? (
              <div>Hide Answer</div>
            ) : (
              <div>Close</div>
            )}
          </Button>
        </div>
        {this.state.showanswer && (
          <div>
            {!answer && (
              <Grid>
                <Grid item className={classes.tfGrid}>
                  <TextField
                    label="Submit solution...."
                    multiline
                    rows="4"
                    margin="normal"
                    variant="outlined"
                    className={classes.mPCtf}
                    value={this.state.answer}
                    onChange={this.handleChange("answer")}
                  />
                </Grid>
                <Grid
                  item
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {/* <input accept="image/*" className={classes.inputt} id="add-image" multiple type="file" />
                        <label className={classes.mLb} htmlFor="add-image">
                        <Button variant="contained" component="span" className={classes.mPCimgbut}>
                        Add Image
                        </Button>    
                      </label> */}
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.mPCimgbut}
                    onClick={() => {
                      this.props.answerProblem(id, this.state.answer);
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            )}
            {answer && (
              <div className={classes.solDiv}>
                <h4>Solution:</h4>
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
                    <p className={classes.subtext}>{answertimeline}</p>
                  </Grid>
                  <Grid item xs={4} className={classes.rewGrid} />
                </Grid>
                <p>{answer}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(DiscussionCardStyles)(DiscussionCard);
