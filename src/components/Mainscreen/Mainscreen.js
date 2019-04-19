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
    // const { toggle2 } = this.props;
    // console.log(this.toggle2);
    return (
      <React.Fragment>
        <Lender toggle2={this.toggle2} />
        <Smallbar />
        <BottomCover />
      </React.Fragment>
    );
  }
}
