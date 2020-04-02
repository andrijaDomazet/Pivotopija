import React, { Component } from "react";
import "./Mainscreen.scss";
import Smallbar from "../../components/Bars/Smallbar/Smallbar";
import BottomCover from "../../components/Bottom_menu/Bottom_menu";
import Lender from "../../components/Lender/Lender";

export default class Mainscreen extends Component {
  toggle2 = () => {
    this.props.history.push("/objekti");
  };
  toggle3 = () => {
    this.props.history.push("/predstavljamo");
  };

  render() {
    return (
      <div className="mainscreen">
        <Lender toggle2={this.toggle2} toggle3={this.toggle3} />
        <Smallbar />
        <BottomCover />
      </div>
    );
  }
}
