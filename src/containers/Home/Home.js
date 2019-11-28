import React, { Component } from "react";
import "./Home.scss";
import Smallbar from "../../components/Smallbar/Smallbar";
import Lender from "../../components/Lender/Lender";
import BottomMenu from "../../components/BottomMenu/Bottom_menu";

export default class Home extends Component {
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
        <BottomMenu />
      </React.Fragment>
    );
  }
}
