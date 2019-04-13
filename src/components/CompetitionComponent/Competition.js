import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import { Button, Dialog } from "@material-ui/core";
import CountDown from "./CountDown";
import Questions from "./CompetitionQues";

const styles = theme =>({
  mComName : {
    textAlign:'center',
    [theme.breakpoints.only('xs')]:{
      fontSize: 14,
    },
    [theme.breakpoints.only('sm')]:{
      fontSize: 15,
    },
    [theme.breakpoints.only('md')]:{
      fontSize: 16,
    },
    [theme.breakpoints.only('lg')]:{
      fontSize: 18,
    },
    [theme.breakpoints.only('xl')]:{
      fontSize: 20,
    }
  },

  mCform : {
    display:'grid',
    [theme.breakpoints.only('xs')]:{
      paddingLeft: '1%',
      paddingRight: '1%'
    },
    [theme.breakpoints.only('sm')]:{
      paddingLeft: '5%',
      paddingRight: '5%'
    },
    [theme.breakpoints.only('md')]:{
      paddingLeft: '12%',
      paddingRight: '12%'
    },
    [theme.breakpoints.only('lg')]:{
      paddingLeft: '20%',
      paddingRight: '20%'
    },
    [theme.breakpoints.only('xl')]:{
      paddingLeft: '25%',
      paddingRight: '25%'
    },

  }
});

class Competition extends Component {
  state = {
    student_name: "",
    institution: "",
    mobile_no: "",
    subject: "",
    country: "",
    enableButton: false,
    exmQuesOpen: false,
    questionData: "",
    user_exam_start: "",
    user_exam_end: "",
    start: ""
  };

  componentDidMount(){
    this.setState({
      student_name:this.props.user.name,
      mobile_no: this.props.user.mobile
    })
  }

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value }, () => {
      if (
        this.state.student_name !== "" &&
        this.state.institution !== "" &&
        this.state.mobile_no !== "" &&
        this.state.subject !== "" &&
        this.state.country !== ""
      ) {
        this.setState({ enableButton: true });
      } else {
        this.setState({ enableButton: false });
      }
    });
  };

  handleExamQuesClose = () => {
    this.setState({ exmQuesOpen: false });
  };

  handleStartButtonClick = () => {
    this.props.startCompetition(
      this.props.competition.competition_id,
      this.props.competition_exam_window.competition_exam_window_id,
      this.state.student_name,
      this.state.mobile_no,
      this.state.institution,
      this.state.subject,
      this.state.country,
      data => {
        if (data.status === false) alert(data.msg);
        else {
          this.setState({ start: data.start }, () => {
            console.log(data,"questioooon");
          });
          this.setState({ questionData: data.questions }, () => {
            this.setState({
              exmQuesOpen: true,
              user_exam_start: new Date().getTime()
            });
          });
        }
      }
    );
  };

  competitionAnswerSubmit = mark => {
    this.props.competitionAnswerSubmit(this.state.start, mark);
    this.setState({ exmQuesOpen: false });
  };

  render() {
    const {
      classes,
      compstatus,
      competition,
      competition_exam_window,
      attendcomp
    } = this.props;
    const { enableButton } = this.state;

    const today = new Date().getTime();
    const CompetitionStartDay = new Date(
      this.props.competition.start_date
    ).getTime();
      
    console.log("test", competition_exam_window)
    //console.log("user", this.props.user)

    return (
      <div style={{ marginBottom: 60 }}>
        {
          compstatus !== ""
          ?(<div style={{textAlign:'center', paddingTop: 50}}>
            <strong>{compstatus}</strong>
          </div>)
          :(<div>
          <Table style={{marginTop: 50}}>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} className={classes.mComName}>
                <p style={{ color: "green" }}>
                  <strong>{competition.competition_name}</strong>
                </p>
                <p>
                  <strong>{competition.sub_text}</strong>
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} style={{textAlign:'center'}}>
                <img
                  src="http://www.sciencepathshalabd.com/img/mujib_quiz_bangla.png"
                  alt="comImg"
                  width="90%"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p>পরীক্ষার তারিখ (Exam Date):</p>
              </TableCell>
              <TableCell>
                <p>{competition.start_date}</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p>পরীক্ষার ব্যাপ্তিকাল (Exam Time):</p>
              </TableCell>
              <TableCell>
                <p>{competition.exam_time} min</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p>প্রশ্নসংখ্যা (No of Questions):</p>
              </TableCell>
              <TableCell>
                <p>{competition.number_of_question}</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p>পূর্ণমান (Full marks):</p>
              </TableCell>
              <TableCell>
                <p>
                  {parseInt(competition.number_of_question, 10) *
                    parseInt(competition.mark_per_question, 10)}
                </p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} style={{textAlign:'center'}}>
                <p style={{ color: "darkred" }}>{`For each wrong answer ${
                  competition.negative_mark_per_question
                } marks will be deducted.`}</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {today > CompetitionStartDay ? (
          <div>
            {attendcomp ? (
              <div>
                <div style={{textAlign:'center'}}>
                  <p style={{ backgroundColor: "darkgray" }}>
                    <strong>
                      প্রতিযোগিতায় অংশগ্রহণ করতে নিচের ফর্মটি পূরণ করুন
                    </strong>
                  </p>
                </div>
                <div className={classes.mCform}>
                  <TextField
                    
                    label="Name/নামঃ"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    value={this.state.student_name}
                    onChange={this.handleInputChange("student_name")}
                  />
                  <TextField
                    
                    label="Mobile No/মোবাইল নম্বর (ইংরেজিতে)"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    value={this.state.mobile_no}
                    onChange={this.handleInputChange("mobile_no")}
                  />
                  <TextField
                    label="Institute Name/শিক্ষাপ্রতিষ্ঠানের নামঃ"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    value={this.state.institution}
                    onChange={this.handleInputChange("institution")}
                  />
                  <TextField
                    label="Subject or Class/সাবজেক্ট বা ক্লাসঃ"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    value={this.state.subject}
                    onChange={this.handleInputChange("subject")}
                  />
                  <TextField
                    label="Country/দেশ:"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    value={this.state.country}
                    onChange={this.handleInputChange("country")}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ textTransform: "none" }}
                    disabled={!enableButton}
                    onClick={this.handleStartButtonClick}
                  >
                    Start Competition
                  </Button>
                </div>
              </div>
            ) : (
              <div style={{textAlign:'center'}}>
                <p>
                  পরবর্তী পরিক্ষা কিছুক্ষন পরেই শুরু হবে 
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <CountDown comp_start={competition.start_date} />
          </div>
        )}

        <Dialog
          open={this.state.exmQuesOpen}
          onClose={this.state.handleExamQuesClose}
          fullScreen
        >
          <Questions
            questiondata={this.state.questionData}
            competitiondata={this.props.competition}
            competitionwindowdata={this.props.competition_exam_window}
            answerSubmit={this.competitionAnswerSubmit}
            close={this.handleExamQuesClose}
            competitionAnswerSubmit={this.competitionAnswerSubmit}
          />
        </Dialog>
          </div>)
        }
      </div>
    );
  }
}

export default withStyles(styles)(Competition);
