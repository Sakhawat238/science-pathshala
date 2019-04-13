import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import EventCardStyles from './EventCardStyles';
import Grid from '@material-ui/core/Grid';


const MyEventCard = (props) => {
    const {classes, eventData, onEventParticipateClick, onResultViewClick} = props;

    return (
        <div className={classes.mEroot}>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={8} className={classes.mEfont}>
                    <Grid conainer direction="column">
                        <Grid item>
                            <p><strong>{eventData.location}</strong></p>
                            <p>{eventData.topic}</p>
                        </Grid>
                        <Grid item className={classes.mEend}>
                            <p>{`Start: ${eventData.start}`}</p>
                            <p>{`End: ${eventData.end}`}</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <div><button className={classes.mEbut} onClick={()=>onEventParticipateClick(eventData.id,eventData.start)}>Participate</button></div>
                    <div style={{marginTop:10}}><button className={classes.mEbut} onClick={()=>onResultViewClick(eventData.id)}>View Result</button></div>
                </Grid>
            </Grid>
        </div>
    ); 
}


export default withStyles(EventCardStyles)(MyEventCard);
