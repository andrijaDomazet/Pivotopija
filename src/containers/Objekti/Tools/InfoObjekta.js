import React, { Component } from "react";
import "./InfoObjekta.scss";

export default class InfoObjekta extends Component {
  render() {
    let infoClasses = "infoObjekta";
    if (this.props.show) {
      infoClasses = "infoObjekta open";
    }
    const { name, img } = this.props.podaci;

    return (
      <div className={infoClasses}>
        <div className="infoDiv">
          <span className="close-btn" onClick={this.props.removeCommentBox}>
            <i className="fa fa-window-close" />
          </span>
          <div className="infoSlika">
            <img src={img} alt="img" />
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    );
  }
}
