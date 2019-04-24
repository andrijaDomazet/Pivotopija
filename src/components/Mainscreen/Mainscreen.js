import React, { Component } from "react";
import "./Mainscreen.scss";
import Smallbar from "../Smallbar/Smallbar";
import BottomCover from "../Bottom_menu/Bottom_menu";
import Lender from "../Lender/Lender";

export default class Mainscreen extends Component {
  state = {
    prikaz_objekata: false
  };

  toggle2 = () => {
    this.props.history.push("/objekti");
  };

  render() {
    // console.log(this.toggle2);

    return (
      <React.Fragment>
        <Lender toggle2={this.toggle2} />
        <Smallbar />
        <BottomCover />
      </React.Fragment>
    );
  }
}
