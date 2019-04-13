import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from '@material-ui/core/TextField';
import SignUp from '@material-ui/icons/PlayForWork'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from "@material-ui/core/InputAdornment";

import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
});

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone_number: "",
            password: "",
            name: "",
            confirm: "",
            showPassword: false,
            confirmPassword: false,
            remember: false,
            isDisabled: true,
        };
    }
    handleSignUp=()=>{
        const {name,phone_number,password}= this.state;
        this.props.handleSignUp(name,phone_number,password,password);
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value },()=>{
            if(this.state.phone_number.length >10 && this.state.password.length >5 && this.state.password===this.state.confirm){
                this.setState({isDisabled:false})
            }else{
                this.setState({isDisabled:true})
            }

        });
        
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    handleClickConfirmPassword = () => {
        this.setState(state => ({ confirmPassword: !state.confirmPassword }));
    };

    isSelected = () => {
        this.setState({ remember: !this.state.remember });
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
                        type='text'
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange('name')}

                    />
                    <TextField
             
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type='number'
                        label="Phone Number"
                        value={this.state.phone_number}
                        onChange={this.handleChange('phone_number')}

                    />
                    <TextField
                       
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={this.state.showPassword ? 'text' : 'password'}
                        label="Password"
                        placeholder="At least 6 characters long.."
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                  
                        className={classNames(classes.margin, classes.textField)}
                        variant="outlined"
                        type={this.state.confirmPassword ? 'text' : 'password'}
                        label="Confirm Password"
                        value={this.state.confirm}
                        onChange={this.handleChange('confirm')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickConfirmPassword}
                                    >
                                        {this.state.confirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* <DialogContentText id="alert-dialog-slide-description">
                        <Checkbox
                            checked={this.state.remember}
                            onChange={this.isSelected}
                        />
                        <InputLabel
                            htmlFor="adornment-amount"
                            style={{ marginRight: 10 }}
                        >
                            Remember Me
                            </InputLabel>
                    </DialogContentText> */}
                </DialogContent>

                <DialogActions style={{ flexDirection: 'column' }}>
                    <Button onClick={this.handleSignUp} color="secondary" variant='contained' style={{ margin: '3% 0' }}
                        disabled={this.state.isDisabled}
                    >
                        Sign Up <SignUp />
                    </Button>
                </DialogActions>
            </Dialog>

        );
    }
}



export default withStyles(styles)(SignUpModal);
