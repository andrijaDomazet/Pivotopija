import React, { Component } from "react";
import "./Mainscreen.scss";
import Smallbar from "../Smallbar/Smallbar";
import BottomCover from "../Bottom_menu/Bottom_menu";

export default class Mainscreen extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main_cover">
          <p>Idemmmooo...</p>
        </div>
        <Smallbar />
        <BottomCover />
      </React.Fragment>
    );
  }
}
