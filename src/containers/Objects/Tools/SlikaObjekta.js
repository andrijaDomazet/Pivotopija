import React, { Component } from "react";
import "./SlikaObjekta.scss";
import "./Objekat.scss";
import SimpleButton from "../../../UI/Buttons/SimpleButton";
import SocialButtons from "./SocialButtons";

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
      <div className={`img__container ${this.props.classes}`}>
        <img src={img} alt="" onClick={this.showInfoObject} />
        <SimpleButton
          classes={`smaller__btn ${this.props.classes}`}
          clicked={this.setSmallObjects()}
          children={<i className="fas fa-compress-arrows-alt" />}
        />
        <SimpleButton
          classes="close__btn"
          clicked={this.closeObject(id)}
          children={<i className="fa fa-window-close" />}
        />
        <SocialButtons classes={this.props.classes} />
      </div>
    );
  }

  closeObject(id) {
    return () => {
      this.props.removeObjekat(id);
    };
  }
  setSmallObjects() {
    return () => {
      this.props.setSmallObjects();
    };
  }
}
