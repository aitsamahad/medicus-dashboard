import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useStyles from "./styles/navbar";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import SlideMenu from "./SlideMenu";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const { cart, user } = useContext(UserContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    setState([1, 2, 3]);
  }, []);
  let history = useRouter();
  const ChangeRoute = (route) => {
    history.push(route);
  };
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  // 	setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </Menu>
  );

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
      {renderMobileMenu}
    </div>
  );
}
