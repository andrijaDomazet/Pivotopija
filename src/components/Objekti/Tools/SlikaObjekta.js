import React, { Component } from "react";
import "./SlikaObjekta.scss";
import "./Objekat.scss";

export default class SlikaObjekta extends Component {
  handler = fb => {
    window.location.replace({ fb });
    console.log(fb);
  };
  render() {
    const { id, img, fb } = this.props.podaci;

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
        <span className="fb" onClick={this.handler}>
          <i className="fab fa-facebook-square">
            <a href={fb} />
          </i>
        </span>
      </div>
    );
  }
}
