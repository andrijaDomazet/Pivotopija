import React, { Component } from "react";
import "./SlikaObjekta.scss";
import "./Objekat.scss";
import InfoObjekta from "./InfoObjekta";
import CloseButton from "../../../UI/Buttons/CloseButton";

export default class SlikaObjekta extends Component {
  state = {
    prikazInfoObjekta: false,
  };
  removeCommentBox = () => {
    this.setState({
      prikazInfoObjekta: false,
    });
  };
  showInfoObject = () => {
    this.setState((prevState) => {
      return { prikazInfoObjekta: !prevState.prikazInfoObjekta };
    });
  };
  render() {
    const { id, img } = this.props.podaci;

    return (
      <div className="img__container">
        <img src={img} alt="" onClick={this.showInfoObject} />
        <CloseButton classes="close__btn" />
        <span
          className="close__btn"
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
