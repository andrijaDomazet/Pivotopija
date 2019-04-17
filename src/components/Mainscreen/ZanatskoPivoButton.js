import React from "react";
import "./ZanatskoPivoButton.scss";
import srednjiLogo from "../Lender/lenderIMG/srednjiLogo.png";

export default function ZanatskoPivoButton() {
  return (
    <div>
      <button className="btn_zanatskaPiva" onClick={this.toggle2}>
        <img src={srednjiLogo} alt="" width="5rem" />
      </button>
    </div>
  );
}
