import React, { Component } from "react";
import BeerLady1 from "../Lender/lenderIMG/BeerLady1.png";
import pluto from "../Lender/lenderIMG/pluto.png";
import srednjiLogo from "../Lender/lenderIMG/srednjilogo.png";
import "../Lender/Lender.scss";
import cover from "../../img/cover.jpg";
import { Spring } from "react-spring";

export default class Lender extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     prikaz_objekata: false
  //   };
  // }
  // toggle2 = () => {
  //   this.props.history.push("/objekti");
  // };

  render() {
    return (
      <div className="main_cover">
        <img src={cover} alt="" width="100%" height="100%" />
        <div className="Lady1">
          <img src={BeerLady1} width="25%" alt="slika2" />
        </div>
        <div className="pluto">
          <img src={pluto} width="30%" alt="slika3" />
        </div>
        <button className="btn_zanatskaPiva" onClick={this.props.toggle2}>
          <img src={srednjiLogo} width="200px" alt="" />
        </button>
      </div>
    );
  }
}
