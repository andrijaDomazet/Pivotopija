import React, { Component } from "react";
import "./InfoPiva.scss";

export default class InfoPiva extends Component {
  render() {
    let infoClassesPiva = "infoPiva";
    if (this.props.show) {
      infoClassesPiva = "infoPiva open";
    }
    const { name, img } = this.props.podaci;

    return (
      <div className={infoClassesPiva}>
        <div className="infoDiv-pivo">
          <span className="close-btn" onClick={this.props.removeCommentBox}>
            <i className="fa fa-window-close" />
          </span>
          <div className="infoSlika-pivo">
            <img src={img} alt="img" />
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    );
  }
}
