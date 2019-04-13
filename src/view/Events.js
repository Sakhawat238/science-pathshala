import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Axios from "../axios/Axios";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EventMain from "../components/EventComponent/EventMain";
import ChallengeMain from "../components/ChallengeComponent/ChallengeMain";
import Competition from "../components/CompetitionComponent/Competition";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 82,
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
  }
});

class Events extends Component {
  state = {
    tabValue: 0,
    Eventdata: [],
    MyEventdata: [],
    id: "",
    attendcomp: true,
    Challengedata: [],
    myChallenge: [],
    competition: {},
    competition_exam_window: {},
    cmperr: "",
    competition_id: "",
    competition_exam_window_id: "",
    start: ""
  };

  handleTabChange = (event, value) => {
    this.setState({ tabValue: value });
  };
  reload = () => {
    let that = this;
    Axios.events(this.props.id, (err, data) => {
      let Eventdata = [];
      if (data && data.events) {
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
      }
      that.setState({ Eventdata: Eventdata });
    });
    Axios.myevents(this.props.id, (err, data) => {
      let Eventdata = [];
      if (data && data.events) {
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
      }
      that.setState({ MyEventdata: Eventdata });
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
        that.setState({ myChallenge: Challengedata });
      }
    });
  };
  purchaseEvent = eventId => {
    let that = this;
    Axios.purchaseEvent(this.props.id, eventId, (err, data) => {
      if (data.status) {
        console.log(data);
        that.reload();
        that.props.profile();
      }
    });
  };
  participateEvent = (eventId, cb) => {
    Axios.participateEvent(this.props.id, eventId, (err, data) => {
      cb(data.exams, data.attended_exam);
    });
  };
  eventResult = (eventId, cb) => {
    Axios.eventResult(this.props.id, eventId, (err, data) => {
      if (data) {
        cb(data.event_result);
      } else {
        cb(false);
      }
    });
  };
  eaxmQuestion = (exam_id, cb) => {
    Axios.eaxmQuestion(this.props.id, exam_id, (err, data) => {
      cb(data);
    });
  };
  answerSubmit = (exam_id, mark, markdetails) => {
    Axios.answerSubmit(
      this.props.id,
      exam_id,
      mark,
      markdetails,
      (err, data) => {}
    );
    //this.handleExamQuestionDialogClose();
  };
  purchaseChallenge = challengeId => {
    let that = this;
    Axios.purchaseChallenge(this.props.id, challengeId, (err, data) => {
      if (data.status) {
        that.reload();
        that.props.profile();
      }
    });
  };

  participateChallenge = (challengeId, cb) => {
    Axios.participateChallenge(this.props.id, challengeId, (err, data) => {
      if(data) cb(data.exams, data.attended_exam);
      else console.log('no data found');
    });
  };
  challengeexamQuestion = (exam_id, cb) => {
    Axios.challengeexamQuestion(this.props.id, exam_id, (err, data) => {
      console.log(data, "question");
      if(data) cb(data);
      else console.log("no data found");
    });
  };
  challengeanswerSubmit = (exam_id, mark, markdetails) => {
    Axios.challengeanswerSubmit(
      this.props.id,
      "1",
      "1000",
      "markdetails",
      (err, data) => {
        console.log(data, "result_submit");
      }
    );
    //this.handleExamQuestionDialogClose();
  };
  challengeResult = (eventId, cb) => {
    Axios.challengeResult(this.props.id, "1", (err, data) => {
      if (data) {
        console.log(data, "challenge_result");
        //cb(data.event_result);
      } else {
        cb(false);
      }
    });
  };


  componentDidMount = () => {
    let that = this;
    Axios.competition(this.props.id, (err, data) => {
      if (data && data.competition) {
        let competition = {
          competition_id: data.competition.competition_id,
          competition_name: data.competition.competition_name,
          competition_price: data.competition.competition_price,
          display: "1",
          end_date: new Date(data.competition.end_date).toDateString(),
          exam_time: data.competition.exam_time,
          mark_per_question: data.competition.mark_per_question,
          negative_mark_per_question:
            data.competition.negative_mark_per_question,
          number_of_question: data.competition.number_of_question,
          start_date: new Date(data.competition.start_date).toDateString(),
          sub_text: data.competition.sub_text
        };
        console.log(data,'competition');
        if (data.competition_exam_window) {
          that.setState({
            competition_exam_window: data.competition_exam_window,
            attendcomp: true
          });
        } else {
          that.setState({
            competition_exam_window: data.next_competition_exam_window,
            attendcomp: false
          });
        }
        that.setState({ competition: competition, cmperr: "" });
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
        that.setState({ MyEventdata: Eventdata });
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
        //console.log(Challengedata);
        that.setState({ myChallenge: Challengedata });
      }
    });

    this.setState({ tabValue: this.props.evntTabVal });
  };

  handleCompetitonStart = (
    competition_id,
    competition_exam_window_id,
    name,
    mobile,
    institute_name,
    classi,
    district,
    cb
  ) => {
    this.setState({
      competition_id: competition_id,
      competition_exam_window_id: competition_exam_window_id
    });
    Axios.participatecompetition(
      this.props.id,
      competition_id,
      competition_exam_window_id,
      name,
      mobile,
      institute_name,
      classi,
      district,
      (err, data) => {
        console.log(data,'qwewe',err);
        if (data) {
          cb(data);
        } else cb(false);
      }
    );
  };
  competitionAnswerSubmit = (start, mark) => {
    Axios.submitcompetition(
      this.props.id,
      this.state.competition_id,
      this.state.competition_exam_window_id,
      start,
      mark,
      (err, data) => {
        //console.log(data, "submit");
        if (data.status) {
          alert(data.msg);
        }
      }
    );
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.tabValue}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Challenges" />
          <Tab label="Events" />
          <Tab label="Competition" />
        </Tabs>
        {this.state.tabValue === 0 && (
          <ChallengeMain
            Challengedata={this.state.Challengedata}
            MyChallengeData={this.state.myChallenge}
            purchaseChallenge={this.purchaseChallenge}
            participateChallenge={this.participateChallenge}
            challengeExamQuestion={this.challengeexamQuestion}
            challengeResult={this.challengeResult}
            challengeAnswerSubmit={this.challengeanswerSubmit}
          />
        )}
        {this.state.tabValue === 1 && (
          <EventMain
            Eventdata={this.state.Eventdata}
            MyEventdata={this.state.MyEventdata}
            purchaseEvent={this.purchaseEvent}
            participateEvent={this.participateEvent}
            eaxmQuestion={this.eaxmQuestion}
            eventResult={this.eventResult}
            answerSubmit={this.answerSubmit}
          />
        )}
        {this.state.tabValue === 2 && (
          <Competition
            compstatus={this.state.cmperr}
            competition={this.state.competition}
            competition_exam_window={this.state.competition_exam_window}
            attendcomp={this.state.attendcomp}
            startCompetition={this.handleCompetitonStart}
            competitionAnswerSubmit={this.competitionAnswerSubmit}
            user={this.props.user}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Events);
