import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    console.log(this.props)
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Nav location={location} />

          {this.props.children}

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
