import React, { Component } from "react";
import "./SlikaObjekta.scss";
import "./Objekat.scss";
import InfoObjekta from "./InfoObjekta";
import SimpleButton from "../../../UI/Buttons/SimpleButton";

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
        <SimpleButton
          classes="close__btn"
          clicked={this.closeObject(id)}
          children={<i className="fa fa-window-close" />}
        />
        <InfoObjekta
          podaci={this.props.podaci}
          removeCommentBox={this.removeCommentBox}
          show={this.state.prikazInfoObjekta}
        />
      </div>
    );
  }

  closeObject(id) {
    return () => {
      this.props.removeObjekat(id);
    };
  }
}
