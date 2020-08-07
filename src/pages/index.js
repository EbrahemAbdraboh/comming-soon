import React, { Component, Fragment } from "react";
import ComingSoon from "./comingSoon";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <Fragment>
        <ComingSoon />
      </Fragment>
    );
  }
}

export default LandingPage;
