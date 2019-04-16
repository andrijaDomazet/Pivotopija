import React from "react";
import "./ZanatskoPivoButton.scss";
import trougao from "../../img/trougao.png";

export default function ZanatskoPivoButton() {
  return (
    <div>
      <button className="btn_zanatskaPiva" onClick={this.toggle2}>
        <img src={trougao} alt="" width="5rem" />
      </button>
    </div>
  );
}
