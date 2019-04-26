import React, { Component } from "react";

import BeerLady1 from "../Lender/lenderIMG/BeerLady1.png";
import pluto from "../Lender/lenderIMG/pluto.png";
import srednjiLogo from "../Lender/lenderIMG/srednjilogo.png";
import "../Lender/Lender.scss";
import cover from "../../img/cover.jpg";
import ZanatskoPivoButton from "../Mainscreen/Buttons/ZanatskoPivoButton";

export default class Lender extends Component {
  render() {
    const { toggle2 } = this.props;
    return (
      <div className="main_cover">
        <img src={cover} alt="" width="100%" height="100%" />
        <div className="lady">
          <img src={BeerLady1} alt="slika2" />
        </div>
        <div className="pluto">
          <img src={pluto} width="30%" alt="slika3" />
        </div>
        <ZanatskoPivoButton toggle2={toggle2} />
      </div>
    );
  }
}
