import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import ContextProvider from "../src/context/UserContext";
import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress";
import ScrollToTop from "../src/utils/ScrollToTop";
import SlideMenu from "../src/components/SlideMenu";
import useStyles from "../src/components/styles/navbar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Footer from "../src/components/Footer";

// NProgress configuration and setup
NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default function MyApp(props) {
  const { Component, pageProps, router } = props;
  const [state, setState] = React.useState([]);
  React.useEffect(() => {
    setState([1, 2, 3]);
  }, []);

  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  if (router.pathname === "/") {
    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
          <link
            rel="stylesheet"
            href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
          <link
            rel="stylesheet"
            href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <ContextProvider>
            <ScrollToTop>
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
              <Component {...pageProps} />
              <Footer />
            </ScrollToTop>
          </ContextProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
