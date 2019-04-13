import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import UserInfoStyles from "./UserInfoStyles";
import Grid from "@material-ui/core/Grid";
import noImg from '../../nullImage.png';

const UserInfo = props => {
  const { classes, name, mobile, image } = props;
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center" style={{marginBottom: 50}}>
      {
        image === 'http://sciencepathshalabd.com/image/null'
        ?(<Avatar alt="profile pic" src={noImg} className={classes.avatar} />)
        :(<Avatar alt="profile pic" src={image} className={classes.avatar} />)
      }
      <p className={classes.mUItype}>
        <strong>{name}</strong>
      </p>
      <p className={classes.mUIinst}>{mobile}</p>
    </Grid>
  );
};

export default withStyles(UserInfoStyles)(UserInfo);
