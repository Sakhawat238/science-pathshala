import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ProblemInputStyles from "./ProblemInputStyles";
import TextField from "@material-ui/core/TextField";
import GoldCoin from "./goldcoin.png";
import Levelone from "./level1.png";
import Leveltwo from "./level2.png";
import Levelthree from "./level3.png";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Axios from "../../axios/Axios";

var file = new FormData();
class ProblemInput extends Component {
  state = {
    category: "",
    difficulty: "",
    coin: "10",
    imageLink: "",
    topic: "",
    description: ""
  };

  handleSubjectChange = name => event => {
    this.setState({ [name]: event.target.value });
    console.log("sub", event.target.value);
  };
  handleUploadFile = event => {
    this.setState({ imageLink: event.target.files[0].name });
    file.append("problem_image", event.target.files[0]);
  };
  handleDifficultyChange = name => event => {
    this.setState({ [name]: event.target.value });
    //console.log("dfc", event.target.value);
  };

  handleCoinChange = name => event => {
    this.setState({ [name]: event.target.value });
    //console.log("coin", event.target.value);
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    //console.log(name, event.target.value);
  };
  handleaddProblem = () => {
    file.append("imagelink", this.state.imageLink);
    file.append("topic", this.state.topic);
    file.append("problem", this.state.description);
    file.append("problem_cowry", this.state.coin);
    console.log(file.entries());
    // for (var pair of file.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    this.props.problemInput(this.state.description,this.state.coin, bool => {
      console.log(bool);
    });
  };
  render() {
    const { classes, onClickInput } = this.props;
    const { coin } = this.state;

    return (
      <div>
        <Grid container justify="center" className={classes.mPh}>
          <Grid item xs={4}>
            <button className={classes.mPIbut} onClick={onClickInput}>
              Back
            </button>
          </Grid>
          <Grid item xs={8}>
            <p className={classes.mPIhd}>Submit your problem</p>
          </Grid>
        </Grid>
        <div className={classes.mPImain}>
          <Grid container direction="column">
            {/* <TextField
              label="Problem topic"
              type="text"
              margin="normal"
              variant="outlined"
              name="topic"
              value={this.state.topic}
              onChange={this.handleChange("topic")}
              className={classes.mPItf}
            /> */}
            <TextField
              label="Problem description"
              multiline
              rows="10"
              margin="normal"
              variant="outlined"
              value={this.state.description}
              onChange={this.handleChange("description")}
              className={classes.mPItf}
            />
            {/* <Grid container justify="center" className={classes.mPh}>
              <input
                accept="image/*"
                className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={this.handleUploadFile}
              />
              <Typography gutterBottom variant="h5" component="h2">
                {this.state.imageLink}
              </Typography>
              <label htmlFor="raised-button-file">
                <Button
                  //color="primary"
                  component="span"
                  variant="contained"
                  className={classes.button}
                >
                  Upload Image
                </Button>
              </label>
            </Grid> */}
            <TextField
              label="Coin Ammount"
              margin="normal"
              variant="outlined"
              value={this.state.coin}
              onChange={this.handleChange("coin")}
              className={classes.mPItf}
            />
          </Grid>
          {/* <div style={{display:'flex', justifyContent:'space-around', alignItems: 'center'}}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="category">Subject:</InputLabel>
                            <Select
                                native
                                value={this.state.category}
                                onChange={this.handleSubjectChange('category')}
                                inputProps={{
                                name: 'category',
                                id: 'category',
                                }}
                            >
                                <option value="" />
                                <option value="phy">Physics</option>
                                <option value="chem">Chemistry</option>
                                <option value="math">Math</option>
                                <option value="bio">Biology</option>
                                <option value="soc">Sociology</option>
                                <option value="ban">Bangla</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="difficulty">Difficulty:</InputLabel>
                            <Select
                                native
                                value={this.state.difficulty}
                                onChange={this.handleDifficultyChange('difficulty')}
                                inputProps={{
                                name: 'difficulty',
                                id: 'difficulty',
                                }}
                            >
                                <option value="" />
                                <option value="easy">Easy</option>
                                <option value="mid">Midium</option>
                                <option value="hard">Hard</option> 
                            </Select>
                        </FormControl>
                    </div> */}
          {/* <div className={classes.mPItext}>
            <p>
              We recommend you to spent more coins to set higher priority so
              that your problem will have more probability to be solved;
              especially when it is a hard or urgent problem.
            </p>
          </div>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item>
              <Grid container direction="column">
                <img src={GoldCoin} alt="coin" className={classes.mPIcoin} />
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="coin">Set Coins:</InputLabel>
                  <Select
                    native
                    value={this.state.coin}
                    onChange={this.handleCoinChange("coin")}
                    inputProps={{
                      name: "coin",
                      id: "coin"
                    }}
                  >
                    <option value="" />
                    <option value="100">100 coins</option>
                    <option value="500">500 coins</option>
                    <option value="1000">1000 coins</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item>
              <div>
                {coin === "100" && (
                  <img src={Levelone} alt="lvl1" className={classes.mPImeter} />
                )}
                {coin === "500" && (
                  <img src={Leveltwo} alt="lvl2" className={classes.mPImeter} />
                )}
                {coin === "1000" && (
                  <img
                    src={Levelthree}
                    alt="lvl3"
                    className={classes.mPImeter}
                  />
                )}
              </div>
              <div>
                {coin === "100" && <p>Priority level: 1</p>}
                {coin === "500" && <p>Priority level: 2</p>}
                {coin === "1000" && <p>Priority level: 3</p>}
              </div>
            </Grid>
          </Grid> */}
          <div className={classes.mPIldv}>
            <button className={classes.mPIlbt} onClick={this.handleaddProblem}>
              Submit Problem
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(ProblemInputStyles)(ProblemInput);
