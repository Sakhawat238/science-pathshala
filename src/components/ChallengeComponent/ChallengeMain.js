import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
import MyChallengeCard from '../ChallengeCard/MyChallengeCard';
import ChallengeDetails from './ChallengeDetails';
import Question from './ChallengeQuestions';


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

class ChallengeMain extends Component {
  state = {
    challengePurchasConfrmDialog: false,
    challengeExamDetailsView: false,
    challengeQusetionDialog: false,
    challengeresultViewDialog: false,
    interested_challenge_id: null,
    interested_challenge_cost: null,
    challenge_exam_list: [],
    challenge_questiondata: null,
    challenge_resultdata: null,
    challenge_exam_data: {}
  }

  handleChallengePurchasConfrmDialogClose = () => {
    this.setState({ challengePurchasConfrmDialog: false });
  };
  
  onChallengeJoinCLick = (challengeId,cost) => {
    this.setState({
      insterested_challenge_id: challengeId,
      interested_challenge_cost: cost,
      challengePurchasConfrmDialog: true
    });
  };

  onChallengePurchase = () => {
    this.props.purchaseChallenge(this.state.insterested_challenge_id);
    this.handleChallengePurchasConfrmDialogClose();
  };
  
  handleChallengeExamDetailsDialogOpen = () => {
    this.setState({ challengeExamDetailsView: true });
  };

  handleChallengeExamDetailsDialogClose = () => {
    this.setState({ challengeExamDetailsView: false });
  };

  onChallengeParticipateClick = (challengeId)=> {
    this.props.participateChallenge(challengeId, (exams, attended_exam) => {
      let exam_list = [];
      console.log(exams, "challnege exam");
      exams.forEach(exam => {
        let e = {
          exam_id: exam.challenge_exam_id,
          name: exam.exam_name,
          chlng_id: exam.challenge_id,
          time: exam.exam_time,
          mark: exam.mark_per_question,
          neq_mark: exam.negative_mark_per_question,
          no_ques: exam.number_of_question
        };
        exam_list.push(e);
      });
      this.setState({ challenge_exam_list: exam_list }, () => {
        this.handleChallengeExamDetailsDialogOpen();
      });
    });  
  };


  handleChallengeExamQuestionDialogOpen = () => {
    this.setState({ challengeQusetionDialog: true });
  };

  handleChallengeExamQuestionDialogClose = () => {
    this.setState({ challengeQusetionDialog: false });
  };

  challengeQuestionLoad = exam_id => {
    this.props.challengeExamQuestion(exam_id, data => {
      this.setState({ challenge_questiondata: data },()=>{
        this.handleChallengeExamQuestionDialogOpen();
      });
    });
  };

  onTakeExamClick = exam_id => {
    if (window.confirm("Are you ready to take exam?")) {
      this.handleChallengeExamDetailsDialogClose();
      this.challengeQuestionLoad(exam_id);
      let exam_list = this.state.challenge_exam_list;
      let exam_data = exam_list.find(exam => exam.exam_id === exam_id);
      this.setState({ challenge_exam_data: exam_data },()=>{
        console.log("question data", this.state.challenge_questiondata, exam_list, exam_data);
      });
    } else {
      console.log("NO");
    }
  };


  onChallengeResultViewClick=()=>{

  }
  
  render() {
    const { Challengedata, MyChallengeData, purchaseChallenge, challengeResult,
      challengeAnswerSubmit, classes } = this.props;

    return (
      <div>
        <Grid container justify="center" className={classes.mPh}>
          <p>Available Challenges</p>
        </Grid>
        <Grid container justify="center" className={classes.mLine} />
        {Challengedata.map(data => (
          <ChallengeCard
            challengedata={data}
            onJoinClick={this.onChallengeJoinCLick}
          />
        ))}

        <Grid container justify="center" className={classes.mPh}>
          <p>My Challenges</p>
        </Grid>
        <Grid container justify="center" className={classes.mLine} />
        {MyChallengeData.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <h3>YOU HAVE NOT PURCHASED ANY CHALLENGES YET </h3>
          </div>
        ) : (
          <div>
            {MyChallengeData.map(data => (
              <MyChallengeCard
              challengedata={data}
              onChallengeParticipateClick={this.onChallengeParticipateClick} 
              onChallengeResultViewClick={this.onChallengeResultViewClick}
            />
            ))}
          </div>
        )}

        <Dialog
          open={this.state.challengePurchasConfrmDialog}
          onClose={this.handleChallengePurchasConfrmDialogClose}
          aria-labelledby="challege-purchase-confirm-dialog"
          aria-describedby="challenge-purchase-confirm-dialog-description"
        >
          <DialogTitle id="challenge-purchase-confirm-dialog">
            {"Do you really want to purchase this?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="challenge-purchase-confirm-dialog-description">
              {`Purchasing a challenge is irreversible and it will deduct ${
                this.state.interested_challenge_cost
              } coins from your account`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.onChallengePurchase}
              variant="outlined"
              color="primary"
            >
              Yes
            </Button>
            <Button
              onClick={this.handleChallengePurchasConfrmDialogClose}
              variant="outlined"
              color="primary"
              autoFocus
            >
              No
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.challengeExamDetailsView}
          onClose={this.handleChallengeExamDetailsDialogClose}
          fullScreen
        >
          <div style={{ background:'#E9EBEE' }}>
            <Grid container justify="space-evenly" style={{backgroundColor:'#40c4ff'}}>
              <Grid item>
                <h5>Exams</h5>
              </Grid>
              <Grid item style={{ marginTop: "auto", marginBottom: "auto" }}>
                <Button
                  variant="outlined"
                  color="default"
                  onClick={this.handleChallengeExamDetailsDialogClose}
                >
                  Close Window
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="center" className={classes.mLine} />
            <div>
              {this.state.challenge_exam_list.map(exam => (
                <ChallengeDetails
                  examdata={exam}
                  onTakeExamClick={this.onTakeExamClick}
                />
              ))}
            </div>
          </div>
        </Dialog>

        <Dialog
          open={this.state.examQusetionDialog}
          onClose={this.handleExamQuestionDialogClose}
          fullScreen
        >
          {/* <Question
            questiondata={this.state.challenge_questiondata}
            examdata={this.state.challenge_exam_data}
            answerSubmit={this.answerSubmit}
            close={this.handleChallengeExamQuestionDialogClose}
          /> */}
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ChallengeMain);
