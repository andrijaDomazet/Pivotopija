import React, { Component } from "react";
import "./Pivo.scss";

export default class Pivo extends Component {
  render() {
    const { id, name, img, abv } = this.props.pivo;
    return (
      <div className="pivo">
        <div className="img-container">
          <img src={img} alt="jelen" />
          <span className="abv">{abv}%</span>
        </div>
        <div className="infoPiva">
          <h2>{id}</h2>
          <h3>{name}</h3>
        </div>
      </div>
    );
  }
}
