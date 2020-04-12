import React, { Component } from "react";
import "./CraftBeersButton.scss";
import srednjiLogo from "../../components/Lender/lenderIMG/srednjilogo.png";

export default class CraftBeersButton extends Component {
  render() {
    const { toggle2 } = this.props;
    return (
      <div>
        <button className="btn__craftBeers" onClick={toggle2}>
          <img src={srednjiLogo} alt="" />
        </button>
      </div>
    );
  }
}
