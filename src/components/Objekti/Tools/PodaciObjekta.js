import React, { Component } from "react";
import "./Objekat.scss";
import "./PodaciObjekta.scss";
import ToggleComments from "./ToggleComments";
import Backdrop from "../../Backdrop/Backdrop";
import UpisKomentara from "./UpisKomentara";
import PrikazKomentara from "./PrikazKomentara";
import InfoObjekta from "./InfoObjekta";

export default class PodaciObjekta extends Component {
  state = {
    upisKomentaraOpen: false,
    prikazKomentaraOpen: false,
    prikazInfoObjekta: false,
    brojSvidjanja: 0,
    brojKomentara: 0,
    showInfo: false
  };

  okidacPrikazaKomentara = () => {
    this.setState(prevState => {
      return { prikazKomentaraOpen: !prevState.prikazKomentaraOpen };
    });
  };

  okidacUpisaKomentara = () => {
    this.setState(prevState => {
      return { upisKomentaraOpen: !prevState.upisKomentaraOpen };
    });
  };

  okidacInfoObjekta = () => {
    this.setState(prevState => {
      return { prikazInfoObjekta: !prevState.prikazInfoObjekta };
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
    this.setState({
      upisKomentaraOpen: false,
      prikazKomentaraOpen: false,
      prikazInfoObjekta: false
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
            <p>Sviđanja: {this.state.brojSvidjanja}</p>
            <button className="like" onClick={this.brojacSvidjanja}>
              <i className="far fa-thumbs-up" />
            </button>
          </div>
          <div className="komentarisanje">
            <p onClick={this.okidacUpisaKomentara}>
              Komentara: {this.state.brojKomentara}
            </p>
            <ToggleComments click={this.okidacUpisaKomentara} />
            <UpisKomentara
              naziv={this.props.podaci}
              brojacKomentara={this.brojacKomentara}
              removeCommentBox={this.removeCommentBox}
              show={this.state.upisKomentaraOpen}
            />
            {backdrop}
            <PrikazKomentara
              naziv={this.props.podaci}
              removeCommentBox={this.removeCommentBox}
              show={this.state.prikazKomentaraOpen}
            />
            <InfoObjekta
              podaci={this.props.podaci}
              removeCommentBox={this.removeCommentBox}
              show={this.state.prikazInfoObjekta}
            />
          </div>
        </div>
        <div className="opsti-podaci">
          <h3 onClick={this.okidacInfoObjekta}>{name}</h3>
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
