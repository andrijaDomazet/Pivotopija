import React, { Component } from "react";
import "./Mainscreen.scss";
import Smallbar from "../Smallbar/Smallbar";
import BottomCover from "../Bottom_menu/Bottom_menu";
import cover from "../../img/cover.jpg";
import trougao from "../../img/trougao.png";
import bottle from "../../img/bottle.png";

export default class Mainscreen extends Component {
  state = {
    prikaz_objekata: false
  };

  toggle2 = () => {
    this.props.history.push("/objekti");
  };

  render() {
    return (
      <React.Fragment>
        <div className="main_cover">
          <img src={cover} alt="" width="100%" height="100%" />
          <p>Idemmmooo...</p>
          <button className="btn_zanatskaPiva" onClick={this.toggle2}>
            <img src={trougao} alt="" width="120rem" />
          </button>
          <div className="btn_bottle">
            <img src={bottle} alt="" height="400rem" />
          </div>
        </div>
        <Smallbar />
        <BottomCover />
      </React.Fragment>
    );
  }
}
