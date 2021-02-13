import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import useStyles from "./styles/navbar";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import SlideMenu from "./SlideMenu";
import Image from "next/image";

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
      <MenuItem>
        {/* <IconButton
          aria-label="show 4 new mails"
          color="inherit"
          onClick={user && postcode ? handleOpen : handleOpen}
        >
          <LocationOnIcon />
          {postcode || "Select Post code"}
        </IconButton> */}
      </MenuItem>
      <MenuItem>
        {/* <IconButton aria-label="show 11 new notifications" color="inherit">
          <FormControl className={classes.formControl}>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: "name",
                id: "uncontrolled-native",
              }}
            >
              <option value={1}>Delivery</option>
              <option value={2}>Pickup</option>
              <option value={3}>Dine-in</option>
            </NativeSelect>
          </FormControl>
        </IconButton> */}
      </MenuItem>
      <MenuItem
      // onClick={handleProfileMenuOpen}
      >
        {/* <Button
          variant="contained"
          className={classes.addToCartBtn}
          disableElevation
          onClick={() =>
            ChangeRoute(`/${cart.partner ? "store/" + cart.partner : "main"}`)
          }
        >
          <ShoppingCartIcon /> £ {cart && cart.total_incl_tax}
        </Button> */}
      </MenuItem>
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
          <div className={classes.logoMobile}>
            <Image
              src="/assets/drop-logo.png"
              alt="logo"
              width={70}
              height={40}
              onClick={() => {
                ChangeRoute("/main");
              }}
            />
          </div>
          <div className={classes.grow} />
          {/* <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={user && postcode ? handleOpen : handleOpen}
            >
              <LocationOnIcon />
              <span className={classes.menuHeadings}>
                {postcode || "Select Postcode"}
              </span>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <FormControl className={classes.formControl}>
                <NativeSelect
                  defaultValue={1}
                  inputProps={{
                    name: "name",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>Delivery</option>
                  <option value={2}>Pickup</option>
                  <option value={3}>Dine-in</option>
                </NativeSelect>
              </FormControl>
            </IconButton>
            <Button
              variant="contained"
              className={classes.addToCartBtn}
              disableElevation
              onClick={() =>
                ChangeRoute(
                  `/${cart.partner ? "store/" + cart.partner : "main"}`
                )
              }
            >
              <ShoppingCartIcon /> £ {cart && cart.total_incl_tax}
            </Button>
          </div> */}
          {/* <div className={classes.sectionMobile}>
            <Button
              variant="contained"
              className={classes.addToCartBtn}
              disableElevation
              onClick={() =>
                ChangeRoute(
                  `/${cart.partner ? "store/" + cart.partner : "main"}`
                )
              }
            >
              <ShoppingCartIcon /> £ {cart && cart.total_incl_tax}
            </Button>
          </div> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
