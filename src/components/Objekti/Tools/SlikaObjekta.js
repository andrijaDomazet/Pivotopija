import React, { Component } from "react";
import "./SlikaObjekta.scss";
import "./Objekat.scss";

export default class SlikaObjekta extends Component {
  render() {
    const { id, img } = this.props.podaci;

    return (
      <div className="img-container">
        <img src={img} alt="" />
        <span
          className="close-btn"
          onClick={() => {
            this.props.removeObjekat(id);
          }}
        >
          <i className="fa fa-window-close" />
        </span>
      </div>
    );
  }
}
