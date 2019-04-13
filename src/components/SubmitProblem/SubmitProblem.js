import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import SubmitProblemStyles from './SubmitProblemStyles';
import TextField from '@material-ui/core/TextField';
import CameraIcon from '@material-ui/icons/CameraAltOutlined'
import Tooltip from '@material-ui/core/Tooltip';

  
const SubmitProblem = (props) => {

    const {classes, onClickInput} = props;

    return(
        <div className={classes.root} onClick={onClickInput}>
            <Tooltip title="Submit Your Problem Here">
                <TextField
                    disabled
                    defaultValue="What's you're looking for?"
                    className={classes.mSPtf}
                    margin="normal"
                    variant="outlined"
                />
            </Tooltip>
            <CameraIcon className={classes.mSPicon}/>
        </div>
    );
}

export default withStyles(SubmitProblemStyles)(SubmitProblem);
