import React, { Component } from "react";
import './PlutoButton.scss';
import pluto from "../../Lender/lenderIMG/pluto.png";

export default class PlutoButton extends Component {
  render() {
    const { toggle3 } = this.props;
    return (
      <div>
        <button className="btn_pluto" onClick={toggle3}>
          <img src={pluto} alt="" />
        </button>
      </div>
    );
  }
}