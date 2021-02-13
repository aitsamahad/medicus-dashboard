import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

export default class Layout extends Component {
  render() {
    return (
      <>
        <NavBar />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
