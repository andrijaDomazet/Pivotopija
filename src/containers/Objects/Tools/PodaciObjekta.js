import React, { Component } from "react";
import "./Objekat.scss";
import "./PodaciObjekta.scss";
import ToggleComments from "./ToggleComments";
import Backdrop from "../../../components/Backdrop/Backdrop";
import UpisKomentara from "./UpisKomentara";
import PrikazKomentara from "./PrikazKomentara";
import InfoObjekta from "./InfoObjekta";
import Facilities from "./Facilities";

export default class PodaciObjekta extends Component {
  state = {
    upisKomentaraOpen: false,
    prikazKomentaraOpen: false,
    prikazInfoObjekta: false,
    brojSvidjanja: 0,
    brojKomentara: 0,
    showInfo: false,
  };

  okidacPrikazaKomentara = () => {
    this.setState((prevState) => {
      return { prikazKomentaraOpen: !prevState.prikazKomentaraOpen };
    });
  };

  okidacUpisaKomentara = () => {
    this.setState((prevState) => {
      return { upisKomentaraOpen: !prevState.upisKomentaraOpen };
    });
  };

  okidacInfoObjekta = () => {
    this.setState((prevState) => {
      return { prikazInfoObjekta: !prevState.prikazInfoObjekta };
    });
  };

  brojacSvidjanja = () => {
    let noviBrojac = this.state.brojSvidjanja + 1;
    this.setState({
      brojSvidjanja: noviBrojac,
    });
  };

  brojacKomentara = () => {
    let noviKomentar = this.state.brojKomentara + 1;
    this.setState({
      brojKomentara: noviKomentar,
    });
  };
  removeCommentBox = () => {
    this.setState({
      upisKomentaraOpen: false,
      prikazKomentaraOpen: false,
      prikazInfoObjekta: false,
    });
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    const { city, name, info, facilities } = this.props.podaci;
    return (
      <div className="objekat-info">
        <div className="opsti-podaci">
          <h3 onClick={this.okidacInfoObjekta}>{name}</h3>
          <h4>{city}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloremque vel similique illo quasi distinctio, commodi eius quidem,
            odio molestiae.
          </p>
          <Facilities facilities={facilities} />
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </div>
    );
  }
}
