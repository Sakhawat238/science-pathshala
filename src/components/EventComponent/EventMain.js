import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import EventCard from "../EventCard/EventCard";
import MyEventCard from "../EventCard/MyEventCard";
import EventDetails from "./EventDetails";
import Question from "./Questions";
import Result from "./Result";



const styles = theme => ({
  mPh: {
    backgroundColor: "#F2F2F2",
    fontSize: 16
  },

  mLine: {
    height: 10,
    backgroundColor: "#F2F2F2",
    marginTop: 8
  }
});

class EventMain extends Component {
  state = {
    evntPurchasConfrmDialog: false,
    eventExamDetailsView: false,
    examQusetionDialog: false,
    resultViewDialog: false,
    interested_event_id: null,
    interested_event_cost: null,
    exam_list: [],
    questiondata: null,
    resultdata: null,
    exam_data: {}
  };

  handleEvntPurchasConfrmDialogClose = () => {
    this.setState({ evntPurchasConfrmDialog: false });
  };

  onEventJoinCLick = (eventId, cost) => {
    this.setState({
      insterested_event_id: eventId,
      interested_event_cost: cost,
      evntPurchasConfrmDialog: true
    });
  };

  onEventPurchase = () => {
    this.props.purchaseEvent(this.state.insterested_event_id);
    this.handleEvntPurchasConfrmDialogClose();
  };

  handleEventExamDetailsDialogOpen = () => {
    this.setState({ eventExamDetailsView: true });
  };

  handleEventExamDetailsDialogClose = () => {
    this.setState({ eventExamDetailsView: false });
  };

  onEventParticipateClick = (eventId ,eventStart)=> {
    var estart = new Date(eventStart);
    var today = new Date();
    if(estart.getTime() > today.getTime()){
      alert("Event has not started yet..");
    }else{
      this.props.participateEvent(eventId, (exams, attended_exam) => {
        let exam_list = [];
        exams.forEach(exam => {
          let attended = false;
          let index = attended_exam.findIndex(o => o === exam.event_exam_id);
          if (index !== -1) {
            attended = true;
          }
          let e = {
            end_time: exam.event_exam_end_at,
            exam_id: exam.event_exam_id,
            attended: attended,
            name: exam.event_exam_name,
            start: exam.event_exam_start_at,
            event_id: exam.event_id,
            time: exam.exam_time,
            mark: exam.mark_per_question,
            neq_mark: exam.negative_mark_per_question,
            no_ques: exam.number_of_question
          };
          exam_list.push(e);
        });
        this.setState({ exam_list: exam_list }, () => {
          
        });
      });
      this.handleEventExamDetailsDialogOpen();
    }
  };

  handleExamQuestionDialogOpen = () => {
    this.setState({ examQusetionDialog: true });
  };

  questionLoad = exam_id => {
    this.props.eaxmQuestion(exam_id, data => {
      //console.log(queston);
      //this.setState({question:queston});
      this.setState({ questiondata: data });
      
      this.handleExamQuestionDialogOpen();
    });
  };

  handleExamQuestionDialogClose = () => {
    this.setState({ examQusetionDialog: false });
  };

  onTakeExamClick = exam_id => {
    if (window.confirm("Are you ready to take exam?")) {
      this.handleEventExamDetailsDialogClose();
      this.questionLoad(exam_id);
      let exam_list = this.state.exam_list;
      let exam_data = exam_list.find(exam => exam.exam_id === exam_id);
      this.setState({ exam_data: exam_data });
    } else {
      console.log("NO");
    }
  };

  answerSubmit = (exam_id, mark, markdetails) => {
    this.props.answerSubmit(exam_id, mark, markdetails);
    this.handleExamQuestionDialogClose();
  };
  handleResultViewDialogOpen = () => {
    this.setState({ resultViewDialog: true });
  };

  handleResultViewDialogClose = () => {
    this.setState({ resultViewDialog: false });
  };

  onResultViewClick = eventId => {
    this.props.eventResult(eventId, data => {
      this.setState({ resultdata: data }, () => {
   
        this.handleResultViewDialogOpen();
      });
    });
  };

 
  render() {
    const { Eventdata, MyEventdata, classes } = this.props;

    return (
      <div> 
        <Grid container justify="center" className={classes.mPh}>
          <p>Available Events</p>
        </Grid>
        <Grid container justify="center" className={classes.mLine} />
        
        {Eventdata.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <h3>NO EVENTS AVAILABLE RIGHT NOW</h3>
          </div>
        ) : (
          <div>
            {Eventdata.map(data => (
              <EventCard eventData={data} onJoinClick={this.onEventJoinCLick} />
            ))}
          </div>
        )}
        <Grid container justify="center" className={classes.mPh}>
          <p>My Events</p>
        </Grid>
        <Grid container justify="center" className={classes.mLine} />
        {MyEventdata.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <h3>YOU HAVE NOT PURCHASED ANY EVENT</h3>
          </div>
        ) : (
          <div>
            {MyEventdata.map(data => (
              <MyEventCard
                eventData={data}
                onEventParticipateClick={this.onEventParticipateClick}
                onResultViewClick={this.onResultViewClick}
              />
            ))}
          </div>
        )}

        <Dialog
          open={this.state.evntPurchasConfrmDialog}
          onClose={this.handleEvntPurchasConfrmDialogClose}
          aria-labelledby="event-purchase-confirm-dialog"
          aria-describedby="event-purchase-confirm-dialog-description"
        >
          <DialogTitle id="event-purchase-confirm-dialog">
            {"Do you really want to purchase this?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="event-purchase-confirm-dialog-description">
              {`Purchasing a event is irreversible and it will deduct ${
                this.state.interested_event_cost
              } coins from your account`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.onEventPurchase}
              variant="outlined"
              color="primary"
            >
              Yes
            </Button>
            <Button
              onClick={this.handleEvntPurchasConfrmDialogClose}
              variant="outlined"
              color="primary"
              autoFocus
            >
              No
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.eventExamDetailsView}
          onClose={this.handleEventExamDetailsDialogClose}
          fullScreen
        >
          <div style={{ padding: 20 }}>
            <Grid container justify="space-evenly" style={{backgroundColor:'#40c4ff'}}>
              <Grid item>
                <h5>Exams</h5>
              </Grid>
              <Grid item style={{ marginTop: "auto", marginBottom: "auto" }}>
                <Button
                  variant="outlined"
                  color="default"
                  onClick={this.handleEventExamDetailsDialogClose}
                >
                  Close Window
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="center" className={classes.mLine} />
            {this.state.exam_list.map(exam => (
              <EventDetails
                examdata={exam}
                onTakeExamClick={this.onTakeExamClick}
              />
            ))}
          </div>
        </Dialog>

        <Dialog
          open={this.state.examQusetionDialog}
          onClose={this.handleExamQuestionDialogClose}
          fullScreen
        >
          <Question
            questiondata={this.state.questiondata}
            examdata={this.state.exam_data}
            answerSubmit={this.answerSubmit}
            close={this.handleExamQuestionDialogClose}
          />
        </Dialog>

        <Dialog
          open={this.state.resultViewDialog}
          onClose={this.handleResultViewDialogClose}
          fullScreen
        >
          {Boolean(this.state.resultdata) &&(<Result data={this.state.resultdata} />)}
          {!Boolean(this.state.resultdata) &&(<div>You have not participatea in the Event</div>)}
          <Button variant="outlined" color="primary" onClick={this.handleResultViewDialogClose}>Back</Button>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(EventMain);
