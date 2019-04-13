import React  from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import XPIcon from './star.png'
import XPstyles from './XPstyles';
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';

const XP = (props)=>{
    const {classes, level, tvalMax, tvalNow} = props;
    const percentage = ((tvalNow/tvalMax)*100);
    return(
        <div  className={classes.flx}>
            <Avatar alt="xp icon" src={XPIcon} className={classes.avatar} />
            <h4 className={classes.mH4}>{ level }</h4>
            <Tooltip title={`${tvalNow} / ${tvalMax}`}  classes={{ tooltip: classes.mT }}>
                <div className={classes.progress}>
                    <LinearProgress variant="determinate" value={percentage} style={{height: '20px'}}/>
                </div>
            </Tooltip>
        </div>
    );
}

export default withStyles(XPstyles)(XP);