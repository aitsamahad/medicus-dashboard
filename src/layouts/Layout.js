import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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
