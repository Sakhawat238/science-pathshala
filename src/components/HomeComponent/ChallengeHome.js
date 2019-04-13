import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const ChallengeCardHomeStyles = theme =>({
    mEroot: {
        border: '1px solid #BFBEBE',
        borderRadius: 8,
        [theme.breakpoints.only('xs')]:{
            marginBottom: 10,
        },
        [theme.breakpoints.only('sm')]:{
            marginBottom: 15,
        },
        [theme.breakpoints.only('md')]:{
            marginBottom: 20,
        },
        [theme.breakpoints.only('lg')]:{
            marginBottom: 25,

        },
        [theme.breakpoints.only('xl')]:{
            marginBottom: 25,
        }
    },

    mEfont: {
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
            paddingLeft: 10,
            paddingTop: 5,
            paddingBottom: 0
        },

        fontSize: 13,
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 0.
    },

    mEbut: {
        backgroundColor: '#f9de46',
        width: 125,
        height: 45,
        borderRadius: 8,
        [theme.breakpoints.only('xs')]:{
            width: 80,
            height: 50,
            marginLeft: 20,
        }
    },

    mEend: {
        color: '#7e847d',

        [theme.breakpoints.only('xs')]:{
            marginTop: 20
            
        },

        [theme.breakpoints.only('sm')]:{
            marginTop: 22
            
        },
        [theme.breakpoints.only('md')]:{
            marginTop: 24
            
        },
        [theme.breakpoints.only('lg')]:{
            marginTop: 26
            
        },
        [theme.breakpoints.only('xl')]:{
            marginTop: 28
            
        }
    }
});


const ChallengeHome = (props) => {
    const {classes, challengedata, onJoinClick} = props;

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
                    <Tooltip title="Please login to buy challenges" placement="top">
                    <button className={classes.mEbut} onClick={()=>onJoinClick(challengedata.id)}>{`Buy (${challengedata.cost} coins)`}</button>
                    </Tooltip>
                </Grid>
            </Grid>
        </div>
    ); 
}


export default withStyles(ChallengeCardHomeStyles)(ChallengeHome);