import React, { Component } from "react";
import "./Mainscreen.scss";
import Smallbar from "../Smallbar/Smallbar";
import Bottom_menu from "../Bottom_menu/Bottom_menu";
import Lender from "../Lender/Lender";

export default class Mainscreen extends Component {
  toggle2 = () => {
    this.props.history.push("/objekti");
  };
  toggle3 = () => {
    this.props.history.push("/predstavljamo");
  };

  render() {
    return (
      <React.Fragment>
        <Lender toggle2={this.toggle2} toggle3={this.toggle3} />
        <Smallbar />
        <Bottom_menu />
      </React.Fragment>
    );
  }
}
