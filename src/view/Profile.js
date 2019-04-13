import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserInfo from "../components/UserInfo/UserInfo";
import Chart from "../components/Chart/Chart";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import MyProblems from "../components/MyProblems/MyProblems";
import Axios from "../axios/Axios";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 68,
    [theme.breakpoints.only("xl")]: {
      marginLeft: 310,
      marginRight: 310
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: 280,
      marginRight: 280
    },

    [theme.breakpoints.only("md")]: {
      marginLeft: 150,
      marginRight: 150
    },

    [theme.breakpoints.only("sm")]: {
      marginLeft: 70,
      marginRight: 70
    }
  },

  mPh: {
    backgroundColor: "#F2F2F2",
    marginTop: "30px"
  },

  mDtab: {
    backgroundColor: "#BFBEBE"
  }
});

const data = [
  {
    name: "SAT",
    problemsolved: 0,
    wronganswer: 0,
    problemasked: 0,
    problempending: 0
  },
  {
    name: "SUN",
    problemsolved: 0,
    wronganswer: 0,
    problemasked: 0,
    problempending: 0
  },
  {
    name: "MON",
    problemsolved: 0,
    wronganswer: 0,
    problemasked: 0,
    problempending: 0
  },
  {
    name: "TUE",
    problemsolved: 0,
    wronganswer: 0,
    problemasked: 0,
    problempending: 0
  },
  {
    name: "WED",
    problemsolved: 0,
    wronganswer: 0,
    problemasked: 0,
    problempending:0
  },
  {
    name: "THU",
    problemsolved: 0,
    wronganswer: 0,
    problemasked: 0,
    problempending: 0
  },
  {
    name: "FRI",
    problemsolved: 0,
    wronganswer: 0,
    problemasked: 0,
    problempending: 0
  },
];


// const data = [
//   {
//     name: "JAN",
//     problemsolved: 14,
//     wronganswer: 5,
//     problemasked: 11,
//     problempending: 2
//   },
//   {
//     name: "FEB",
//     problemsolved: 20,
//     wronganswer: 7,
//     problemasked: 9,
//     problempending: 4
//   },
//   {
//     name: "MAR",
//     problemsolved: 11,
//     wronganswer: 3,
//     problemasked: 14,
//     problempending: 6
//   },
//   {
//     name: "APR",
//     problemsolved: 17,
//     wronganswer: 6,
//     problemasked: 16,
//     problempending: 3
//   },
//   {
//     name: "MAY",
//     problemsolved: 12,
//     wronganswer: 4,
//     problemasked: 8,
//     problempending: 1
//   },
//   {
//     name: "JUN",
//     problemsolved: 22,
//     wronganswer: 3,
//     problemasked: 11,
//     problempending: 5
//   },
//   {
//     name: "JUL",
//     problemsolved: 7,
//     wronganswer: 4,
//     problemasked: 7,
//     problempending: 3
//   },
//   {
//     name: "AUG",
//     problemsolved: 11,
//     wronganswer: 3,
//     problemasked: 14,
//     problempending: 6
//   },
//   {
//     name: "SEP",
//     problemsolved: 7,
//     wronganswer: 4,
//     problemasked: 7,
//     problempending: 3
//   },
//   {
//     name: "OCT",
//     problemsolved: 12,
//     wronganswer: 4,
//     problemasked: 8,
//     problempending: 1
//   },
//   {
//     name: "NOV",
//     problemsolved: 14,
//     wronganswer: 5,
//     problemasked: 11,
//     problempending: 2
//   },
//   {
//     name: "DEC",
//     problemsolved: 17,
//     wronganswer: 6,
//     problemasked: 16,
//     problempending: 3
//   }
// ];

class Profile extends Component {
  state = {
    user_name: "",
    user_mobile: "",
    image: "",
    value: 0,
    mydiscussions: []
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    let that = this;
    Axios.profile(this.props.id, (err, data) => {
      that.setState({
        user_name: data.name,
        image: data.pic,
        user_mobile: data.mobile
      });
    });

    Axios.mydiscussion(this.props.id, (err, data) => {
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
            answer: discussion.answer,
            answer_image: discussion.answer_image,
            answer_subscriber_id: discussion.answer_subscriber_id,
            answer_time: discussion.answer_time,
            usertype: "Student",
            reward_ammount: discussion.problem_cowry,
            problem_title: discussion.hard_level,
            problem_image: data.dispic + discussion.problem_img,
            problem_description: discussion.problem
          };
          discussions.push(d);
        });
        that.setState({ mydiscussions: discussions });
      }
    });
  }

  upDateProfileInfo = name => {
    /* eikhane code likha lagbe */
    console.log(name, "name");
    let that = this;
    Axios.updatename(this.props.id, name, (err, data) => {
      if (data.status && data) {
        that.setState({
          user_name: name
        });
      }
    });
  };

  upDatePassword = (newPassword, retypePassword) => {
    let that = this;
    Axios.updatepass(this.props.id, newPassword, (err, data) => {
      if (data.status && data) {
        console.log(data);
      }
    });
    /* eikhane code likha lagbe */
  };

  render() {
    const { classes } = this.props;
    const { user_name, user_mobile, image, value, mydiscussions } = this.state;

    return (
      <div className={classes.root}>
        {/* <Tabs
          fullWidth
          value={value}
          onChange={this.handleChange}
          className={classes.mDtab}
        >
          <Tab label="My Info" />
          <Tab label="My Problems" />
        </Tabs> */}

        {/* {value === 0 && ( */}
          <div>
            <UserInfo name={user_name} mobile={user_mobile} image={image} />
            <UpdateProfile
              onUpdateProfileClick={this.upDateProfileInfo}
              onUpdatePasswordClick={this.upDatePassword}
            />
            <Grid container justify="center" className={classes.mPh}>
              <p>Performance</p>
            </Grid>
            <Chart data={data} />
          </div>
        {/* )} */}
        {/* {value === 1 && ( */}
          <div style={{marginBottom:70}}>
            <Grid container justify="center" className={classes.mPh}>
              <p>My Discussions</p>
            </Grid>
            {mydiscussions.length === 0 ? (
              <div style={{ textAlign: "center", paddingTop: 50 }}>
                <strong>Yo have not submitted any problem yet</strong>
              </div>
            ) : (
              <MyProblems discussions={mydiscussions} />
            )}
          </div>
        {/* )} */}
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
