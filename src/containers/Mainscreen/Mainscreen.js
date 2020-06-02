import React, { Component } from "react";
import "./Mainscreen.scss";
import Smallbar from "../../components/Bars/Smallbar/Smallbar";
import BottomCover from "../../components/Bottom_menu/Bottom_menu";
import Lender from "../../components/Lender/Lender";
import Footer from "../../components/Footer/Footer";

export default class Mainscreen extends Component {
  redirect = (e) => {
    e === "craftBeer"
      ? this.props.history.push("/objekti")
      : this.props.history.push("/predstavljamo");
  };

  render() {
    return (
      <div className="mainscreen">
        <Lender redirect={this.redirect} />
        <Smallbar />
        {/* <Footer /> */}
        {/* <BottomCover /> */}
      </div>
    );
  }
}
