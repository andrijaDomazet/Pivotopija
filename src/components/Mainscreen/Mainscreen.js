import React, { Component } from "react";
import "./Mainscreen.scss";
import Smallbar from "../Smallbar/Smallbar";
import BottomCover from "../Bottom_menu/Bottom_menu";
import cover from "../../img/cover.jpg";
import srednjiLogo from "../Lender/lenderIMG/srednjilogo.png";
import bottle from "../Lender/lenderIMG/pluto.png";
import Lender from "../Lender/Lender";

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
          <Lender />
          <button className="btn_zanatskaPiva" onClick={this.toggle2}>
            <img src={srednjiLogo} width="200px" alt="" />
          </button>
          {/*<div className="btn_bottle">
            <img src={bottle} alt=""  />
          </div>*/}
        </div>
        <Smallbar />
        <BottomCover />
      </React.Fragment>
    );
  }
}
