import React, { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import PaymentIcon from "@material-ui/icons/Payment";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Avatar from "@material-ui/core/Avatar";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import Link from "next/link";

export function SlideMenu() {
  let history = useRouter();
  const { user, fetchUserCart, setIsLoggedIn } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);

  const handleMenuOpen = () => setOpen(true);
  const handleMenuClose = () => setOpen(false);

  const handleSignIn = () => {
    handleMenuClose();
    history.push(`/with-email?main=true`);
  };

  return (
    <Menu
      isOpen={open}
      onOpen={handleMenuOpen}
      onClose={handleMenuClose}
      customBurgerIcon={<MenuIcon />}
    >
      <div className="menu-container">
        {/* {user ? (
          <div className="signin">Sign out</div>
        ) : (
          <div className="signin" onClick={() => handleSignIn()}>
            Sign In
          </div>
        )} */}
        <Divider style={{ marginTop: 30 }} />
        {user && (
          <div className="account-details-container">
            <div className="account-details">
              <div className="account-avatar">
                <Avatar src="/broken-image.jpg" />
              </div>
              <div className="account-links">
                <span className="account-title">{user.first_name}</span>
                <span className="view-account">View account</span>
              </div>
            </div>
          </div>
        )}
        <div className="menu-items-container">
          {user && (
            <>
              <Link href="/main">
                <a
                  id="home"
                  className="menu-item"
                  onClick={() => handleMenuClose()}
                >
                  <HomeIcon />
                  Home
                </a>
              </Link>
              <Link href="/my-orders">
                <a
                  id="orders"
                  className="menu-item"
                  onClick={() => handleMenuClose()}
                >
                  <ReceiptIcon />
                  My Orders
                </a>
              </Link>
              <Link href="/account?section=3">
                <a
                  id="payment"
                  className="menu-item"
                  onClick={() => handleMenuClose()}
                >
                  <PaymentIcon />
                  Payment Method
                </a>
              </Link>
              <Link href="/account?section=2">
                <a
                  id="addresses"
                  className="menu-item"
                  onClick={() => handleMenuClose()}
                >
                  <LocationOnIcon />
                  My addresses
                </a>
              </Link>
              <Divider style={{ marginTop: 30 }} />
            </>
          )}

          <Link href="/doctors">
            <a
              id="doctors"
              className="menu-item"
              onClick={() => handleMenuClose()}
            >
              <LocationOnIcon />
              Doctors
            </a>
          </Link>
          <Link href="/patients">
            <a
              id="patients"
              className="menu-item"
              onClick={() => handleMenuClose()}
            >
              <LocationOnIcon />
              Patients
            </a>
          </Link>
          {/* <a
            id="add-your-restaurant"
            className="menu-item"
            href="/join-as-partner"
          >
            Add your restaurant
          </a>
          <a
            id="signup-to-deliver"
            className="menu-item"
            href="/join-as-driver"
          >
            Sign up to deliver
          </a> */}
          <Divider style={{ marginTop: 30 }} />
          {/* <div className="app-btn-container">
            <div>
              <span>Download App</span>
            </div>
            <div className="downloadbtn">
              <img
                src="/assets/apple-store-logo.png"
                alt="download from app store"
              />
              <img
                src="/assets/google-play-logo.png"
                alt="download from play store"
              />
            </div>
          </div> */}
        </div>
        {/* <div className="bottom-nav">
          <a href="/privacy">Privacy Policy</a> -{" "}
          <a href="#">Terms & Condition</a> - <a href="#">Faq's</a>
        </div> */}
      </div>
    </Menu>
  );
}
export default SlideMenu;
