import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ProblemInput from "../components/ProblemInput/ProblemInput";
import AllProblems from "../components/AllProblems/AllProblems";
import EventCard from "../components/MainHomeComponent/EventCard";
import MyEventCard from "../components/MainHomeComponent/MyEventCard";
import ChallengeCard from "../components/MainHomeComponent/ChallengeCard";
import MyChallengeCard from "../components/MainHomeComponent/MyChallengeCard";
import Axios from "../axios/Axios";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import noBanner from '../noCompBanner.png';
import Tooltip from '@material-ui/core/Tooltip';
import SubmitProblem from "../components/SubmitProblem/SubmitProblem";
import DiscussionCard from '../components/DiscussionCard/DiscussionCard';


const styles = theme => ({
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

  eventPcDiv: {
    backgroundColor: "#fdfdfd",
    borderRadius: 15,
    padding: 10,
    marginTop: 0
  },

  eventMobileDiv: {
    backgroundColor: "#fdfdfd",
    borderRadius: 15,
    padding: 10,
  },

  discussPcDiv: {
    paddingRight: 20
  }
});

class Discussion extends Component {
  state = {
    submit: false,
    discussions: [],
    Eventdata: [],
    myEventdata:[],
    Challengedata: [],
    myChallengedata:[],
    cmperr:"",
    dispart1:[],
    dispart2:[],
    dispart3:[]
  };

  onClickInput = () => {
    this.setState({ submit: !this.state.submit });
  };
  answerProblem = (id, answer) => {
    let that = this;
    Axios.answerproblem(this.props.id, answer, id, (err, data) => {
      console.log(data);
      if (data) {
        that.reload();
        that.props.profile();
      }
    });
  };
  reload = () => {
    let that = this;

    Axios.discussionall(this.props.id, (err, data) => {
      console.log(data);
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
            discussion_id: discussion.discussion_id,
            answer: discussion.answer,
            answer_image: discussion.answer_image,
            answer_subscriber_id: discussion.answer_subscriber_id,
            answer_time: discussion.answer_time,
            timeline: timeline,
            usertype: "Student",
            reward_ammount: discussion.problem_cowry,
            problem_title: discussion.hard_level,
            problem_image: data.dispic + discussion.problem_img,
            problem_description: discussion.problem
          };
          discussions.push(d);
        });
        that.setState({ discussions: discussions },()=>{
          this.setState({
            dispart1: this.state.discussions.slice(0,5),
            dispart2: this.state.discussions.slice(5,10),
            dispart3: this.state.discussions.slice(10,this.state.discussions.length)
          })
        });
      }
    });

    Axios.competition(this.props.id, (err, data) => {
      if (data && data.competition) {
        that.setState({ cmperr: "" });
      } else {
        that.setState({ cmperr: "No competition Available" });
      }
    });

    Axios.events(this.props.id, (err, data) => {
      if (data && data.events) {
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
      }
    });

    Axios.myevents(this.props.id, (err, data) => {
      if (data && data.events) {
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
        that.setState({ myEventdata: Eventdata });
      }
    });

    Axios.challenges(this.props.id, (err, data) => {
      let Challengedata = [];
      if (data && data.challenges) {
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
      }
      that.setState({ Challengedata: Challengedata });
    });
    Axios.mychallenges(this.props.id, (err, data) => {
      if (data && data.challenges) {
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
        that.setState({ myChallengedata: Challengedata });
      }
    });
  };

  componentDidMount = () => {
    let that = this;

    Axios.discussionall(this.props.id, (err, data) => {
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
            discussion_id: discussion.discussion_id,
            answer: discussion.answer,
            answer_image: discussion.answer_image,
            answer_subscriber_id: discussion.answer_subscriber_id,
            answer_time: discussion.answer_time,
            timeline: timeline,
            usertype: "Student",
            reward_ammount: discussion.problem_cowry,
            problem_title: discussion.hard_level,
            problem_image: data.dispic + discussion.problem_img,
            problem_description: discussion.problem
          };
          discussions.push(d);
        });
        that.setState({ discussions: discussions },()=>{
          this.setState({
            dispart1: this.state.discussions.slice(0,5),
            dispart2: this.state.discussions.slice(5,10),
            dispart3: this.state.discussions.slice(10,this.state.discussions.length)
          })
         
        });
      }
    });
    
    Axios.competition(this.props.id, (err, data) => {
      if (data && data.competition) {
        that.setState({ cmperr: "" });
      } else {
        that.setState({ cmperr: "No competition Available" });
      }
    });

    Axios.events(this.props.id, (err, data) => {
      if (data && data.events) {
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
      }
    });

    Axios.myevents(this.props.id, (err, data) => {
      if (data && data.events) {
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
        that.setState({ myEventdata: Eventdata });
      }
    });

    Axios.challenges(this.props.id, (err, data) => {
      let Challengedata = [];
      if (data && data.challenges) {
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
      }
      that.setState({ Challengedata: Challengedata });
    });
    Axios.mychallenges(this.props.id, (err, data) => {
      if (data && data.challenges) {
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
        that.setState({ myChallengedata: Challengedata });
      }
    });
  };

  problemInput = (problem, coin, cb) => {
    let that = this;
    Axios.postproblem(this.props.id, problem, coin, (err, data) => {
      if (data) {
        that.reload();
        that.props.profile();
        that.onClickInput();
      }
    });
    cb(true);
  };

 
  render() {
    const { classes , pageChange} = this.props;
    const { submit, Eventdata, myEventdata, Challengedata, myChallengedata, cmperr } = this.state;

    return (
      <div style={{ backgroundColor: "#E9EBEE" }}>
        <div className={classes.pcDiv}>
          {submit ? (
            <div>
              <ProblemInput
                onClickInput={this.onClickInput}
                problemInput={this.problemInput}
              />
            </div>
            ) : (
            <Grid container direction="row">
              <Grid item xs={7} className={classes.discussPcDiv}>
                <div style={{ background: "#e9ebee" }}>
                  <AllProblems
                    onClickInput={this.onClickInput}
                    discussions={this.state.discussions}
                    answerProblem={this.answerProblem}
                  />
                </div>
              </Grid>
              <Grid item xs={5}>
                <Grid container justify="center">
                  <p>Competition</p>
                </Grid>
                <Tooltip title="Browse competition here" placement="left">
                  {cmperr !== ""
                    ?(<div style={{textAlign:'center'}}><strong>{cmperr}</strong></div>)
                    :(<div onClick={()=>pageChange(2)} style={{cursor:'pointer'}}>
                      <img src="http://www.sciencepathshalabd.com/img/banner.png" alt="banner" width="100%" style={{borderRadius: 10}}/>
                    </div>)
                  }
                </Tooltip>
                <Grid container justify="center" >
                  <p>Available Events</p>
                </Grid>
                <Tooltip title="Check available events here" placement="left">
                  {Eventdata.length === 0 ? (
                    <div style={{ textAlign: "center" }}>
                      <h3>NO EVENTS AVAILABLE RIGHT NOW</h3>
                    </div>
                  ) : (
                    <div className={classes.eventPcDiv}>
                      {Eventdata.map(data => (
                        <EventCard eventData={data} onJoinClick={()=>pageChange(1)}/>
                      ))}
                    </div>
                  )}
                </Tooltip>
                <Grid container justify="center">
                  <p>My Events</p>
                </Grid>
                <Tooltip title="Check your events here" placement="left">
                  {myEventdata.length === 0 ? (
                    <div style={{ textAlign: "center" }}>
                      <h3>YOU HAVE NOT PURCHASED ANY EVENT</h3>
                    </div>
                  ) : (
                    <div className={classes.eventPcDiv}>
                      {myEventdata.map(data => (
                        <MyEventCard
                          eventData={data}
                          onEventParticipateClick={()=>this.pageChange(1)}
                          onResultViewClick={()=>this.pageChange(1)}
                        />
                      ))}
                    </div>
                  )}
                </Tooltip>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right" }}
                  onClick={()=>pageChange(1)}
                >
                  See All
                </Button>
                <Grid container justify="center">
                  <p>Challenges</p>
                </Grid>
                <Tooltip title="Check available challenges here" placement="left">
                <div className={classes.eventPcDiv}>
                  {Challengedata.map(data => (
                      <ChallengeCard challengedata={data} onJoinClick={()=>pageChange(0)} />
                  ))}
                </div>
                </Tooltip>
                <Grid container justify="center">
                  <p>My Challenges</p>
                </Grid>
                <Tooltip title="Check your challenges here" placement="left">
                <div className={classes.eventPcDiv}>
                  {myChallengedata.map(data => (
                      <MyChallengeCard challengedata={data} onChallengeParticipateClick={()=>pageChange(0)} onChallengeResultViewClick={()=>pageChange(0)} />
                  ))}
                </div>
                </Tooltip>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right", marginBottom: 70 }}
                  onClick={()=>pageChange(0)}
                >
                  See All
                </Button>
              </Grid>
            </Grid>
          )}  
        </div>

        <div className={classes.mobileDiv}>
          {submit ? (
            <div>
              <ProblemInput
                onClickInput={this.onClickInput}
                problemInput={this.problemInput}
              />
            </div>
            ) : (
            <div style={{ background: "#e9ebee" }}>
              {cmperr !== ""
                ?(<div></div>)
                :(<div onClick={()=>pageChange(2)} style={{cursor:'pointer'}}>
                  <img src="http://www.sciencepathshalabd.com/img/banner.png" alt="banner" width="100%" style={{borderRadius: 10}}/>
                </div>)
              }

              <SubmitProblem onClickInput={this.onClickInput} />
              {this.state.dispart1.map((d, i) => {
                return (
                  <DiscussionCard 
                    key={i}
                    id={d.discussion_id}
                    user_image={d.user_image}
                    username={d.username}
                    timeline={d.timeline}
                    usertype={d.usertype}
                    answer={d.answer}
                    answer_image={d.answer_image}
                    answer_subscriber_id={d.answer_subscriber_id}
                    answer_time={d.answer_time}
                    reward_ammount={d.reward_ammount}
                    problem_level={d.problem_title}
                    problem_image={d.problem_image}
                    problem_description={d.problem_description}
                    answerProblem={this.answerProblem}
                  />
                );
              })}

              <Grid container justify="center" >
                <p>Available Events</p>
              </Grid>
              <Tooltip title="Check available events here" placement="top">
                {Eventdata.length === 0 ? (
                  <div style={{ textAlign: "center" }}>
                    <h3>NO EVENTS AVAILABLE RIGHT NOW</h3>
                  </div>
                ) : (
                  <div className={classes.eventMobileDiv}>
                    {Eventdata.map(data => (
                      <EventCard eventData={data} onJoinClick={()=>pageChange(1)}/>
                    ))}
                  </div>
                )}
              </Tooltip>
              <Grid container justify="center">
                <p>My Events</p>
              </Grid>
              <Tooltip title="Check your events here" placement="top">
                {myEventdata.length === 0 ? (
                  <div style={{ textAlign: "center" }}>
                    <h3>YOU HAVE NOT PURCHASED ANY EVENT</h3>
                  </div>
                ) : (
                  <div className={classes.eventMobileDiv}>
                    {myEventdata.map(data => (
                      <MyEventCard
                        eventData={data}
                        onEventParticipateClick={()=>this.pageChange(1)}
                        onResultViewClick={()=>this.pageChange(1)}
                      />
                    ))}
                  </div>
                )}
              </Tooltip>
              <Button
                variant="contained"
                color="primary"
                style={{ float: "right" }}
                onClick={()=>pageChange(1)}
              >
                See All
              </Button>
              <div style={{marginTop:60}}>
              {this.state.dispart2.map((d, i) => {
                return (
                  <DiscussionCard 
                    key={i}
                    id={d.discussion_id}
                    user_image={d.user_image}
                    username={d.username}
                    timeline={d.timeline}
                    usertype={d.usertype}
                    answer={d.answer}
                    answer_image={d.answer_image}
                    answer_subscriber_id={d.answer_subscriber_id}
                    answer_time={d.answer_time}
                    reward_ammount={d.reward_ammount}
                    problem_level={d.problem_title}
                    problem_image={d.problem_image}
                    problem_description={d.problem_description}
                    answerProblem={this.answerProblem}
                  />
                );
              })}
              </div>
              <Grid container justify="center">
                <p>Challenges</p>
              </Grid>
              <Tooltip title="Check available challenges here" placement="top">
              <div className={classes.eventMobileDiv}>
                {Challengedata.map(data => (
                    <ChallengeCard challengedata={data} onJoinClick={()=>pageChange(0)} />
                ))}
              </div>
              </Tooltip>
              <Grid container justify="center">
                  <p>My Challenges</p>
                </Grid>
                <Tooltip title="Check your challenges here" placement="left">
                <div className={classes.eventPcDiv}>
                  {myChallengedata.map(data => (
                      <MyChallengeCard challengedata={data} onChallengeParticipateClick={()=>pageChange(0)} onChallengeResultViewClick={()=>pageChange(0)} />
                  ))}
                </div>
                </Tooltip>
              <Button
                variant="contained"
                color="primary"
                style={{ float: "right", marginBottom: 70 }}
                onClick={()=>pageChange(0)}
              >
                See All
              </Button>
              
              <div style={{marginTop:60}}>
              {this.state.dispart3.map((d, i) => {
                return (
                  <DiscussionCard 
                    key={i}
                    id={d.discussion_id}
                    user_image={d.user_image}
                    username={d.username}
                    timeline={d.timeline}
                    usertype={d.usertype}
                    answer={d.answer}
                    answer_image={d.answer_image}
                    answer_subscriber_id={d.answer_subscriber_id}
                    answer_time={d.answer_time}
                    reward_ammount={d.reward_ammount}
                    problem_level={d.problem_title}
                    problem_image={d.problem_image}
                    problem_description={d.problem_description}
                    answerProblem={this.answerProblem}
                  />
                );
              })}
              </div>
            </div>
          )}  
        </div>
      </div>
    );
  }
}



export default withStyles(styles)(Discussion);
