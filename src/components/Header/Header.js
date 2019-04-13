import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import XP from "./XP";
import Coin from "./Coin";
import Grid from "@material-ui/core/Grid";
import { fade } from "@material-ui/core/styles/colorManipulator";
import LogoutIcon from '@material-ui/icons/ExitToApp'
import Logo from '../../logo.png';


const styles = theme => ({
  root: {
    backgroundColor: "#40C4FF",
    dispaly: "flex"
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
});

const Header = props => {
  const { classes, xp, coin, logoutclick } = props;

  
  let exp = xp;
  let start = 100;
  let level = 1;
  
  while(exp/start > 1){
    exp = xp -start;
    level = level + 1;
    start = start+100;
  }
  
  return (
    <div>
      <AppBar className={classes.root} position="fixed" color="default">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={3}>
              <XP level={level} tvalMax={start} tvalNow={exp} />
            </Grid>
            <Grid item xs={5}>
              <img src={Logo} alt="logo" width="70%"/>
            </Grid>
            <Grid item xs={1} style={{color:'darkolivegreen', display:'grid', justifyContent:"flex-end"}}>
              <div style={{cursor:'pointer'}} onClick={()=>logoutclick()}><LogoutIcon /></div>
            </Grid>
            <Grid item xs={3}>
              <Coin tvalNow={coin} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
