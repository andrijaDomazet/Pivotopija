import React, { Component } from "react";
import "./SlikaObjekta.scss";
import "./Objekat.scss";

export default class SlikaObjekta extends Component {
  render() {
    const { id, img } = this.props.podaci;

    return (
      <div className="img-container">
        <img src={img} alt="" />
        <span className="ocenjivanje">
          <i className="far fa-thumbs-up" />
          <i className="far fa-thumbs-down" />
        </span>
        <span
          className="close-btn"
          onClick={() => {
            this.props.removeObjekat(id);
          }}
        >
          <i className="fas fa-window-close" />
        </span>
      </div>
    );
  }
}