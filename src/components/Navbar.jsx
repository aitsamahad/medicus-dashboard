import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useStyles from "./styles/navbar";
import SlideMenu from "./SlideMenu";

export default function NavBar() {
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    setState([1, 2, 3]);
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.menuColor}>
        <Toolbar className={classes.stretch}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            {state.length ? <SlideMenu /> : <></>}
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            MEDICUS
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
