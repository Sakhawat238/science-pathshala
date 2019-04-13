import React  from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import CoinIcon from './coin.png'
import CoinStyles from './CoinStyles';

const Coin = (props)=>{
    const {classes, tvalNow} = props;
   
    
    return(
        <div  className={classes.flx}>
            <p className={classes.cointext}>{tvalNow}</p>
            <Avatar alt="Coin icon" src={CoinIcon} className={classes.avatar} />
        </div>
    );
}

export default withStyles(CoinStyles)(Coin);