import React, { Component } from "react";
import "./ZanatskoPivoButton.scss";
import srednjiLogo from "../../Lender/lenderIMG/srednjilogo.png";

export default class ZanatskoPivoButton extends Component {
  render() {
    const { toggle2 } = this.props;
    return (
      <div>
        <button className="btn_zanatskaPiva" onClick={toggle2}>
          <img src={srednjiLogo} alt="" />
        </button>
      </div>
    );
  }
}
