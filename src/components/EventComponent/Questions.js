import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Timer from "./Timer";
import SingleQuestion from "./SingleQuestion";
import {withStyles} from '@material-ui/core';


const styles = theme=>({
  quesMainDiv:{
    [theme.breakpoints.only('xs')]:{
      paddingTop: 20,
      paddingBottom: 80,
      paddingLeft: 5,
      paddingRight: 5,
    },
    [theme.breakpoints.only('sm')]:{
      paddingTop: 20,
      paddingBottom: 80,
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.only('md')]:{
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 200,
      paddingRight: 200,
    },
    [theme.breakpoints.only('lg')]:{
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 300,
      paddingRight: 300,
    },
    [theme.breakpoints.only('xl')]:{
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 400,
      paddingRight: 400,
    }
  },

  qdesTable: {
    boxShadow: '1px 1px 4px 1px darkgray',
    marginBottom: 20,
  }
})



class Question extends Component {
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
      totalcorrect * this.props.examdata.mark -
      totalwrong * this.props.examdata.neq_mark;
    this.props.answerSubmit(
      this.props.examdata.exam_id,
      mark,
      JSON.stringify(mark_details)
    );
    // console.log(
    //   finalResult,
    //   totalcorrect,
    //   this.props.examdata,
    //   mark,
    //   JSON.stringify(mark_details)
    // );
    //console.log("totalmarks",totalcorrect* proti ques er mark);
  };

  render() {
    const { questiondata, classes } = this.props;
    return (
      <div className={classes.quesMainDiv}>
        <Table className={classes.qdesTable}>
          <TableBody>
            <TableRow>
              <TableCell>
                <p>Exam Name:</p>
              </TableCell>
              <TableCell>
                <p>{questiondata.exam.event_exam_name}</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p>Exam Duration:</p>
              </TableCell>
              <TableCell>
                <p>{`${questiondata.exam.exam_time} min`}</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p>Negative Mark:</p>
              </TableCell>
              <TableCell>
                <p>{questiondata.exam.neq_mark}</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p>Mark:</p>
              </TableCell>
              <TableCell>
                <p>{questiondata.exam.mark_per_question}</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p>Total Marks:</p>
              </TableCell>
              <TableCell>
                <p>{`${questiondata.exam.mark_per_question}X${
                  questiondata.exam.number_of_question
                }`}</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Timer timeout={this.calculateUserResult}/>

        {questiondata.question.map(ques => (
          <SingleQuestion data={ques} handleAnswer={this.updateAnswerSheet} />
        ))}
        <div style={{display:'flex', justifyContent:'center'}}>
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

export default withStyles(styles)(Question);
