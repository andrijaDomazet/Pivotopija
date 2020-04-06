import React, { Component } from "react";
import "./Beer.scss";
import InfoPiva from "./BeersInfo";

export default class Beer extends Component {
  state = {
    prikazInfoPiva: false,
  };
  okidacInfoPiva = () => {
    console.log("idemooo");

    this.setState((prevState) => {
      return { prikazInfoPiva: !prevState.prikazInfoPiva };
    });
  };
  removeCommentBox = () => {
    this.setState({
      prikazInfoPiva: false,
    });
  };
  render() {
    const { id, name, img, abv } = this.props.pivo;
    return (
      <div className="beer">
        <div className="beer__img">
          <img src={img} alt="beer" onClick={this.okidacInfoPiva} />
          <span className="abv">{abv}%</span>
        </div>
        <div className="beer__info">
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
