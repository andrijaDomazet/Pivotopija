import React, { Component } from "react";
import "./Objekat.scss";
import "./PodaciObjekta.scss";
import FormaKomentara from "./FormaKomentara";
import ToggleComments from "./ToggleComments";
import Backdrop from "../../Backdrop/Backdrop";
import UpisKomentara from "./UpisKomentara";

export default class PodaciObjekta extends Component {
  state = {
    upisKomentaraOpen: false,
    brojSvidjanja: 0,
    brojKomentara: 0,
    showInfo: false
  };
  okidacUpisaKomentara = () => {
    this.setState(prevState => {
      return { upisKomentaraOpen: !prevState.upisKomentaraOpen };
    });
  };

  brojacSvidjanja = () => {
    let noviBrojac = this.state.brojSvidjanja + 1;
    this.setState({
      brojSvidjanja: noviBrojac
    });
  };

  brojacKomentara = () => {
    let noviKomentar = this.state.brojKomentara + 1;
    this.setState({
      brojKomentara: noviKomentar
    });
  };
  removeCommentBox = () => {
    this.setState(prevState => {
      return { upisKomentaraOpen: false };
    });
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    const { city, name, info } = this.props.podaci;
    return (
      <div className="objekat-info">
        <div className="socialButtons">
          <div className="svidjanja">
            <p>{this.state.brojSvidjanja} sviđanja</p>
            <button className="like" onClick={this.brojacSvidjanja}>
              <i className="far fa-thumbs-up" />
            </button>
          </div>
          <div className="komentarisanje">
            <p>{this.state.brojKomentara} komentara</p>
            <ToggleComments click={this.okidacUpisaKomentara} />
            {/* <FormaKomentara okidacUpisaKomentara={this.okidacUpisaKomentara} /> */}
            <UpisKomentara
              brojacKomentara={this.brojacKomentara}
              removeCommentBox={this.removeCommentBox}
              show={this.state.upisKomentaraOpen}
            />
          </div>
        </div>
        <div className="opsti-podaci">
          <h3>{name}</h3>
          <h4>{city}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </div>
    );
  }
}
