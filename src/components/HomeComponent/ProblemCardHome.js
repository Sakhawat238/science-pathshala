import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import CoinPic from "./coinpic.png";
import { Button } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';


const ProblemCardHomeStyles = theme => ({
  mainDiv: {
    boxShadow: "1px 1px 2px 1px #dcdbdb",
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: "#fdfdfd",
    [theme.breakpoints.only("xs")]: {
      marginTop: 8,
      marginBottom: 8,
      padding: 2
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: 12,
      marginBottom: 12,
      padding: 5
    },
    [theme.breakpoints.only("md")]: {
      marginTop: 15,
      marginBottom: 15,
      padding: 10
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: 20,
      marginBottom: 20,
      padding: 12
    },
    [theme.breakpoints.only("xl")]: {
      marginTop: 25,
      marginBottom: 25,
      padding: 14
    }
  },

  useravatar: {
    marginLeft: "auto",
    [theme.breakpoints.only("xs")]: {
      width: 25,
      height: 25,
      marginRight: 10,
      marginTop: 10
    },
    [theme.breakpoints.only("sm")]: {
      width: 30,
      height: 30,
      marginRight: 10,
      marginTop: 15
    },
    [theme.breakpoints.only("md")]: {
      width: 35,
      height: 35,
      marginRight: 13,
      marginTop: 10
    },
    [theme.breakpoints.only("lg")]: {
      width: 35,
      height: 35,
      marginRight: 10,
      marginTop: 10
    },
    [theme.breakpoints.only("xl")]: {
      width: 40,
      height: 40,
      marginRight: 10,
      marginTop: 10
    }
  },

  coinavatar: {
    [theme.breakpoints.only("xs")]: {
      width: 16,
      height: 16,
      marginTop: 12
    },
    [theme.breakpoints.only("sm")]: {
      width: 17,
      height: 17,
      marginTop: 13
    },
    [theme.breakpoints.only("md")]: {
      width: 20,
      height: 20,
      marginTop: 13
    },
    [theme.breakpoints.only("lg")]: {
      width: 22,
      height: 22,
      marginTop: 13
    },
    [theme.breakpoints.only("xl")]: {
      width: 25,
      height: 25,
      marginTop: 14
    }
  },

  username: {
    [theme.breakpoints.only("xs")]: {
      fontSize: 13,
      marginTop: 10,
      marginBottom: 2
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 14,
      marginTop: 12,
      marginBottom: 2
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 15,
      marginTop: 10,
      marginBottom: 2
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 16,
      marginTop: 10,
      marginBottom: 2
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: 16,
      marginTop: 10,
      marginBottom: 2
    }
  },

  subtext: {
    color: "#7b7b7b",
    [theme.breakpoints.only("xs")]: {
      fontSize: 10,
      marginTop: 2
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 12,
      marginTop: 2
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 12,
      marginTop: 4
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 12,
      marginTop: 4
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: 13,
      marginTop: 5
    }
  },

  rewardtext: {
    [theme.breakpoints.only("xs")]: {
      fontSize: 11
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 12
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 13
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 14
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: 15
    }
  },

  rewardammount: {
    color: "green",
    [theme.breakpoints.only("xs")]: {
      fontSize: 15,
      marginTop: 7,
      marginLeft: 3,
      marginRight: 3
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 16,
      marginTop: 8,
      marginLeft: 3,
      marginRight: 3
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 18,
      marginTop: 8,
      marginLeft: 3,
      marginRight: 3
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 20,
      marginTop: 8,
      marginLeft: 3,
      marginRight: 3
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: 22,
      marginTop: 9,
      marginLeft: 3,
      marginRight: 4
    }
  },

  rewGrid: {
    [theme.breakpoints.only("xs")]: {
      paddingLeft: 10
    },
    [theme.breakpoints.only("sm")]: {
      paddingLeft: 20
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: 20
    },
    [theme.breakpoints.only("lg")]: {
      paddingLeft: 30
    },
    [theme.breakpoints.only("xl")]: {
      paddingLeft: 40
    }
  },

  descrpDiv: {
    [theme.breakpoints.only("xs")]: {
      paddingLeft: 22,
      paddingRight: 5,
      fontSize: 12,
      color: "#525252",
      lineHeight: 1
    },
    [theme.breakpoints.only("sm")]: {
      paddingLeft: 75,
      paddingRight: 20,
      fontSize: 13,
      color: "#525252",
      lineHeight: 2
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: 100,
      paddingRight: 60,
      fontSize: 14,
      color: "#525252",
      lineHeight: 2
    },
    [theme.breakpoints.only("lg")]: {
      paddingLeft: 140,
      paddingRight: 100,
      fontSize: 15,
      color: "#525252",
      lineHeight: 2
    },
    [theme.breakpoints.only("xl")]: {
      paddingLeft: 160,
      paddingRight: 110,
      fontSize: 15,
      color: "#525252",
      lineHeight: 2
    }
  },

  problemImg: {
    width: "90%"
  },

  seemorebut: {
    [theme.breakpoints.only("xs")]: {
      padding: 0,
      fontSize: 9,
      textTransform: "none",
      minWidth: 55,
      minHeight: 22
    },
    [theme.breakpoints.only("sm")]: {
      padding: 0,
      fontSize: 10,
      textTransform: "none",
      minWidth: 58,
      minHeight: 23
    },
    [theme.breakpoints.only("md")]: {
      padding: 0,
      fontSize: 11,
      textTransform: "none",
      minWidth: 60,
      minHeight: 25
    },
    [theme.breakpoints.only("lg")]: {
      padding: 0,
      fontSize: 12,
      textTransform: "none",
      minWidth: 63,
      minHeight: 26
    },
    [theme.breakpoints.only("xl")]: {
      padding: 0,
      fontSize: 13,
      textTransform: "none",
      minWidth: 67,
      minHeight: 28
    }
  },

  mPCtf: {
    width: "100%"
  },

  inputt: {
    display: "none !important"
  },

  mPCimgbut: {
    backgroundColor: "#28acef",
    [theme.breakpoints.only("xs")]: {
      minWidth: 75,
      minHeight: 30,
      marginBottom: 16,
      fontSize: 10
    },
    [theme.breakpoints.only("sm")]: {
      minWidth: 80,
      minHeight: 30,
      marginBottom: 12,
      fontSize: 12
    },
    [theme.breakpoints.only("md")]: {
      minWidth: 90,
      minHeight: 28,
      marginBottom: 15,
      fontSize: 13
    },
    [theme.breakpoints.only("lg")]: {
      minWidth: 105,
      minHeight: 30,
      marginBottom: 14,
      fontSize: 14
    },
    [theme.breakpoints.only("xl")]: {
      minWidth: 115,
      minHeight: 33,
      marginBottom: 14,
      fontSize: 14
    }
  },

  tfGrid: {
    [theme.breakpoints.only("xs")]: {
      paddingLeft: "4%",
      paddingRight: "4%"
    },
    [theme.breakpoints.only("sm")]: {
      paddingLeft: "6%",
      paddingRight: "6%"
    },
    [theme.breakpoints.only("md")]: {
      paddingLeft: "8%",
      paddingRight: "8%"
    },
    [theme.breakpoints.only("lg")]: {
      paddingLeft: "10%",
      paddingRight: "10%"
    },
    [theme.breakpoints.only("xl")]: {
      paddingLeft: "10%",
      paddingRight: "10%"
    }
  }
});

class ProblemCardHome extends Component {
  state = {
    show_all: false,
    answer: ""
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  onShowAllCLick = () => {
    this.setState({ show_all: true });
  };

  render() {
    const {
      classes,
      user_image,
      username,
      timeline,
      usertype,
      reward_ammount,
      problem_image,
      problem_description,
    } = this.props;

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
          <Tooltip title="Please login to see details" placement="top">
          <Button
            variant="contained"
            color="primary"
            className={classes.mPCimgbut}
            onClick={this.props.handleClick}
          >
            Answer
          </Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default withStyles(ProblemCardHomeStyles)(ProblemCardHome);
