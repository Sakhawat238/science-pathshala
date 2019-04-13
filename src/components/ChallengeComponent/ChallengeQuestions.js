import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Timer from "./Timer";
import SingleQuestion from "./SingleQuestion";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  quesMainDiv: {
    [theme.breakpoints.only("xs")]: {
      paddingTop: 20,
      paddingBottom: 80,
      paddingLeft: 5,
      paddingRight: 5
    },
    [theme.breakpoints.only("sm")]: {
      paddingTop: 20,
      paddingBottom: 80,
      paddingLeft: 10,
      paddingRight: 10
    },
    [theme.breakpoints.only("md")]: {
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 200,
      paddingRight: 200
    },
    [theme.breakpoints.only("lg")]: {
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 300,
      paddingRight: 300
    },
    [theme.breakpoints.only("xl")]: {
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 400,
      paddingRight: 400
    }
  },

  qdesTable: {
    boxShadow: "1px 1px 4px 1px darkgray",
    marginBottom: 20
  }
});

class ChallengeQuestions extends Component {
  state = {
    answersheet: []
  };

  updateAnswerSheet = (id, actual_ans, user_ans) => {
    let statusCopy = Object.assign({}, this.state);
    statusCopy.answersheet[id] = {
      actual_answer: actual_ans,
      user_answer: user_ans
    };
    this.setState(statusCopy, () => {
      //console.log(this.state.answersheet);
    });
  };

  calculateUserResult = () => {
    const submitTime = new Date().getTime();
    let finalResult = [];
    let totalcorrect = 0;
    let totalwrong = 0;
    let mark_details = [];
    Object.entries(this.state.answersheet).map(array => {
      if (array[1].actual_answer === array[1].user_answer) totalcorrect++;
      else totalwrong++;
      let m = {};
      m[array[0]] = {
        answer: array[1].actual_answer,
        given: array[1].user_answer
      };
      let a = {};
      a.id = array[0];
      a.answer = array[1].actual_answer;
      a.given = array[1].user_answer;
      a.status = array[1].actual_answer === array[1].user_answer ? true : false;
      finalResult.push(a);
      mark_details.push(m);
    });
    let mark =
      totalcorrect * this.props.competitiondata.mark_per_question -
      totalwrong * this.props.competitiondata.negative_mark_per_question;
    console.log(
      "result",
      mark,
      totalcorrect,
      totalwrong,
      finalResult,
      mark_details,
      submitTime
    );
    this.props.competitionAnswerSubmit(mark);
  };

  render() {
    const { questiondata, classes } = this.props;
    return (
      <div className={classes.quesMainDiv}>
        <Timer
          timeout={this.calculateUserResult}
          time={this.props.competitiondata.exam_time}
        />

        {questiondata.map(ques=>(
          <SingleQuestion
            data={ques}
            handleCompetitonAnswer={this.updateAnswerSheet}
          />
        ))}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            color="primary"
            variant="outlined"
            onClick={this.calculateUserResult}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Submit Answer
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChallengeQuestions);
