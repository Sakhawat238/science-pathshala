import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {withStyles} from '@material-ui/core/styles';
import ArrowIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined'


const styles = theme=>({
  sqmainDiv : {
    border: '1px solid #afabab',
    borderRadius: 20,
    paddingTop:12,
    paddingbottom:12,
    marginTop:10,
    marginBottom:10,
    [theme.breakpoints.only('xs')]:{
      paddingLeft: '5%',
    },
    [theme.breakpoints.only('sm')]:{
      paddingLeft: '10%',
    },
    [theme.breakpoints.only('md')]:{
      paddingLeft: '20%',
    },
    [theme.breakpoints.only('lg')]:{
      paddingLeft: '30%',
    },
    [theme.breakpoints.only('xl')]:{
      paddingLeft: '35%',
    },
  },

  sqTitle:{
    fontWeight: 400,
    color:'black',
    display: 'flex',
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
      fontSize: 17,
    },
    [theme.breakpoints.only('xl')]:{
      fontSize: 18,
    }
  }
});


class SingleQuestion extends Component {
  state = {
    value: ""
  };

  onValueChange = event => {
    this.setState({ value: event.target.value }, () => {
      this.props.handleCompetitonAnswer(
        this.props.data.competition_exam_window_question_id,
        this.props.data.answer,
        this.state.value
      );
    });
  };

  render() {
    const { data , classes} = this.props;
    console.log("key", this.props.key);
    return (
      <div className={classes.sqmainDiv}>
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.sqTitle}><ArrowIcon/><p style={{margin:5}}>{data.question}</p></FormLabel>
          <RadioGroup value={this.state.value} onChange={this.onValueChange}>
            <FormControlLabel value="1" control={<Radio />} label={data.opt1} />
            <FormControlLabel value="2" control={<Radio />} label={data.opt2} />
            <FormControlLabel value="3" control={<Radio />} label={data.opt3} />
            <FormControlLabel value="4" control={<Radio />} label={data.opt4} />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(SingleQuestion);
