import React, { Component } from "react";
import "./Pivo.scss";
import InfoPiva from "./InfoPiva";

export default class Pivo extends Component {
  state = {
    prikazInfoPiva: false
  };
  okidacInfoPiva = () => {
    console.log("idemooo");

    this.setState(prevState => {
      return { prikazInfoPiva: !prevState.prikazInfoPiva };
    });
  };
  removeCommentBox = () => {
    this.setState({
      prikazInfoPiva: false
    });
  };
  render() {
    const { id, name, img, abv } = this.props.pivo;
    return (
      <div className="pivo">
        <div className="img-container">
          <img src={img} alt="jelen" onClick={this.okidacInfoPiva} />
          <span className="abv">{abv}%</span>
        </div>
        <div className="glavniInfoPiva">
          <h2>{id}</h2>
          <h3>{name}</h3>
          <InfoPiva
            podaci={this.props.pivo}
            removeCommentBox={this.removeCommentBox}
            show={this.state.prikazInfoPiva}
          />
        </div>
      </div>
    );
  }
}
