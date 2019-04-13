import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import UpdateProfileStyles from "./UpdateProfileStyles";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, Typography } from "@material-ui/core";
import Axios from "../../axios/Axios";
var file = new FormData();
class UpdateProfile extends React.Component {
  state = {
    subject: "",
    openM1: false,
    openM2: false,
    name: "",
    mobile: "",
    npassword: "",
    rpassword: ""
  };
  handleUploadFile = event => {
    this.setState({ imageLink: event.target.files[0].name });
    file.append("file", event.target.files[0]);
    Axios.updatepropic("9", file, (err, data) => {
      console.log(data, "updated", err);
    });
  };
  handleOpenM1 = () => {
    this.setState({ openM1: true });
  };

  handleOpenM2 = () => {
    this.setState({ openM2: true });
  };

  handleCloseM1 = () => {
    this.setState({ openM1: false });
  };

  handleCloseM2 = () => {
    this.setState({ openM2: false });
  };

  onInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  updateProfileCLick = () => {
    this.setState({ openM1: false });
    this.props.onUpdateProfileClick(this.state.name);
    this.setState({ name: "" });
  };
  updatePassCLick = () => {
    this.setState({ openM2: false });
    this.props.onUpdatePasswordClick(
      this.state.npassword,
      this.state.rpassword
    );
    this.setState({ npassword: "", rpassword: "" });
  };
  render() {
    const { classes, onUpdatePasswordClick } = this.props;
    const { openM1, openM2, name, npassword, rpassword } = this.state;

    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {/* <input
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
              Upload Profile Picture
            </Button>
          </label> */}
          {/* <input accept="image/*" className={classes.inputt} id="contained-button-file" multiple type="file" />
                <label className={classes.mLb} htmlFor="contained-button-file">
                    <Button variant="contained"  component="span" className={classes.button}>
                        Update Avatar
                    </Button>
                </label>  */}
          <Button variant="contained" onClick={this.handleOpenM1}>
            Update Name
          </Button>
          <Button variant="contained" onClick={this.handleOpenM2}>
            Update Password
          </Button>
        </Grid>

        <Dialog open={openM1} onClose={this.handleCloseM1}>
          <DialogContent>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <TextField
                  label="Name:"
                  value={name}
                  className={classNames(classes.textField, classes.dense)}
                  margin="normal"
                  variant="outlined"
                  onChange={this.onInputChange("name")}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.updateProfileCLick}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleCloseM1}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>

        <Dialog open={openM2} onClose={this.handleCloseM2}>
          <DialogContent>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <TextField
                  label="New Password"
                  value={npassword}
                  className={classes.textField}
                  type="password"
                  margin="normal"
                  variant="outlined"
                  onChange={this.onInputChange("npassword")}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Retype Password"
                  value={rpassword}
                  className={classes.textField}
                  type="password"
                  margin="normal"
                  variant="outlined"
                  onChange={this.onInputChange("rpassword")}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.updatePassCLick}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleCloseM2}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(UpdateProfileStyles)(UpdateProfile);
