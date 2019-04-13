import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChallengeCardStyles from './ChallengeCardStyle';
import Grid from '@material-ui/core/Grid';


const ChallengeCard = (props) => {
    const {classes, challengedata, onChallengeParticipateClick, onChallengeResultViewClick} = props;

    return (
        <div className={classes.mEroot}>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={8} className={classes.mEfont}>
                    <Grid conainer direction="column">
                        <Grid item>
                            <p><strong>{challengedata.challengetype}</strong></p>
                            <p>{challengedata.topic}</p>
                        </Grid>
                        <Grid item className={classes.mEend}>
                            <p>{`${challengedata.quantity} questions`}</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <div><button className={classes.mEbut} onClick={()=>onChallengeParticipateClick()}>Participate</button></div>
                    <div style={{marginTop:10}}><button className={classes.mEbut} onClick={()=>onChallengeResultViewClick()}>View Result</button></div>
                </Grid>
            </Grid>
        </div>
    ); 
}


export default withStyles(ChallengeCardStyles)(ChallengeCard);