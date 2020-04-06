import React, { Component } from "react";
import "./BeersInfo.scss";

export default class BeersInfo extends Component {
  render() {
    let infoClassesPiva = "beersInfo";
    if (this.props.show) {
      infoClassesPiva = "beersInfo open";
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
