import React, { Component } from "react";
import "./Objekat.scss";
import "./PodaciObjekta.scss";
import FormaKomentara from "./FormaKomentara";
import ToggleComments from "./ToggleComments";
import Backdrop from "../../Backdrop/Backdrop";
import UpisKomentara from "./UpisKomentara";

export default class PodaciObjekta extends Component {
  state = {
    showUpis: false,
    upisKomentaraOpen: false,
    brojac: 0,
    brojKomentara: 0,
    showInfo: false
  };
  okidacUpisaKomentara = () => {
    // console.log("idemoooo");
    this.setState(prevState => {
      return { upisKomentaraOpen: !prevState.upisKomentaraOpen };
    });
  };

  // handleUpis = () => {
  //   this.setState({
  //     showUpis: !this.state.showUpis
  //   });
  // };

  brojacKomentara = () => {
    let noviKomentar = this.state.brojKomentara + 1;
    this.setState({
      brojKomentara: noviKomentar
    });
  };
  brojacSvidjanja = () => {
    let noviBrojac = this.state.brojac + 1;
    this.setState({
      brojac: noviBrojac
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
            <p>{this.state.brojac} sviđanja</p>
            <button className="like" onClick={this.brojacSvidjanja}>
              <i className="far fa-thumbs-up" />
            </button>
          </div>
          <div className="komentarisanje">
            <p>{this.state.brojKomentara} komentara</p>
            <ToggleComments click={this.okidacUpisaKomentara} />
            {/* <FormaKomentara okidacUpisaKomentara={this.okidacUpisaKomentara} /> */}
            <UpisKomentara show={this.state.upisKomentaraOpen} />
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
