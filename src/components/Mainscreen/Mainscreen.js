import React, { Component } from "react";
import "./Mainscreen.scss";
import Smallbar from "../Smallbar/Smallbar";
import BottomCover from "../Bottom_menu/Bottom_menu";
import cover from "../../img/cover.jpg";
import srednjiLogo from "../Lender/lenderIMG/srednjilogo.png";
import bottle from "../Lender/lenderIMG/pluto.png";
import Lender from "../Lender/Lender";
import BeerLady1 from "../Lender/lenderIMG/BeerLady1.png";
import pluto from "../Lender/lenderIMG/pluto.png";

export default class Mainscreen extends Component {
  state = {
    prikaz_objekata: false
  };

  toggle2 = () => {
    this.props.history.push("/objekti");
  };

  render() {
    const { toggle2 } = this.props;
    return (
      <React.Fragment>
        <Lender toggle2={toggle2} />
        {/* dfsdfdsfds */}
        {/* <div className="main_cover">
          <img src={cover} alt="" width="100%" height="100%" />
          <div className="Lady1">
            <img src={BeerLady1} width="25%" alt="slika2" />
          </div>
          <div className="pluto">
            <img src={pluto} width="30%" alt="slika3" />
          </div>
          <button className="btn_zanatskaPiva" onClick={this.toggle2}>
            <img src={srednjiLogo} width="200px" alt="" />
          </button>
        </div> */}
        <Smallbar />
        <BottomCover />
      </React.Fragment>
    );
  }
}
