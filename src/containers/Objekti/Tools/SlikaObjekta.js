import React, { Component } from "react";
import "./SlikaObjekta.scss";
import "./Objekat.scss";
import InfoObjekta from "./InfoObjekta";

export default class SlikaObjekta extends Component {
  state = {
    prikazInfoObjekta: false
  };
  removeCommentBox = () => {
    this.setState({
      prikazInfoObjekta: false
    });
  };
  okidacInfoObjekta = () => {
    this.setState(prevState => {
      return { prikazInfoObjekta: !prevState.prikazInfoObjekta };
    });
  };
  render() {
    const { id, img } = this.props.podaci;

    return (
      <div className="img-container">
        <img src={img} alt="" onClick={this.okidacInfoObjekta} />
        <span
          className="close-btn"
          onClick={() => {
            this.props.removeObjekat(id);
          }}
        >
          <i className="fa fa-window-close" />
        </span>
        <InfoObjekta
          podaci={this.props.podaci}
          removeCommentBox={this.removeCommentBox}
          show={this.state.prikazInfoObjekta}
        />
      </div>
    );
  }
}
