import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockIcon from "@material-ui/icons/LockRounded";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import SignUp from "@material-ui/icons/PlayForWork";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";

import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200
  }
});

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: "",
      password: "",
      showPassword: false,
      remember: false
    };
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  isSelected = () => {
    this.setState({ remember: !this.state.remember });
  };
  handleLogin = () => {
    this.props.handleLogin(this.state.phone_number, this.state.password);
    this.setState({
      phone_number: "",
      password: "",
      showPassword: false,
      remember: false
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        fullWidth={true}
        maxWidth={"xs"}
        open={this.props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Science Pathshala
        </DialogTitle>

        <DialogContent>
          <TextField
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            type="number"
            label="Phone Number"
            value={this.state.phone_number}
            onChange={this.handleChange("phone_number")}
          />
          <TextField
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            type={this.state.showPassword ? "text" : "password"}
            label="Password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {/* <DialogContentText id="alert-dialog-slide-description">
            <InputLabel htmlFor="adornment-amount" style={{ marginRight: 10 }}>
              Forgot Password ?
            </InputLabel>
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            <Checkbox
              checked={this.state.remember}
              onChange={this.isSelected}
            />
            <InputLabel htmlFor="adornment-amount" style={{ marginRight: 10 }}>
              Remember Me
            </InputLabel>
          </DialogContentText> */}
        </DialogContent>

        <DialogActions style={{ flexDirection: "column" }}>
          <Button
            onClick={this.handleLogin}
            color="primary"
            variant="contained"
            style={{ margin: "3% 0" }}
          >
            Log In <LockIcon />
          </Button>
          <div> Or </div>
          <Button
            onClick={this.props.handleSignup}
            color="secondary"
            variant="contained"
            style={{ margin: "3% 0" }}
          >
            Sign Up <SignUp />
          </Button>
          {/* <div> Or </div>
                    <Button onClick={this.handleClose} variant='contained' style={{ margin: '3% 0', borderRadius: 0, backgroundColor: 'blue', textTransform: 'none', color: 'white' }}>
                        <i
                            className={classNames(
                                classes.icon,
                                "fab fa-facebook"
                            )}
                            style={{
                                color: "#3f729b"
                            }}
                        /> Login with Facebook
                    </Button>
                    <div> Or </div>
                    <Button onClick={this.handleClose} variant='contained' style={{ margin: '3% 0', borderRadius: 0,  backgroundColor: 'red', textTransform: 'none', color: 'white' }}>
                        <i
                            className={classNames(
                                classes.icon,
                                "fab fa-google-plus-square"
                            )}
                            style={{
                                color: "#dd4b39"
                            }}
                        /> Sign in with Google
                    </Button> */}
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(LogIn);
