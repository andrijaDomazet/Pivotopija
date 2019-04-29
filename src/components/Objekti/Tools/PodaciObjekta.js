import React, { Component } from "react";
import "./Objekat.scss";
import "./PodaciObjekta.scss";

export default class PodaciObjekta extends Component {
  state = {
    brojac: 0,
    brojKomentara: 0,
    showInfo: false
  };

  komentarisanje = () => {
    let noviKomentar = this.state.brojKomentara + 1;
    this.setState({
      brojKomentara: noviKomentar
    });
  };
  brojacKomentara = () => {
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
    const { city, name, info } = this.props.podaci;
    return (
      <div className="objekat-info">
        <div className="socialButtons">
          <div className="svidjanja">
            <p>{this.state.brojac} sviđanja</p>
            <button className="like" onClick={this.brojacKomentara}>
              <i className="far fa-thumbs-up" />
            </button>
          </div>
          <div className="komentarisanje">
            <p>{this.state.brojKomentara} komentara</p>
            <button className="comments" onClick={this.komentarisanje}>
              <i className="far fa-comments" />
            </button>
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
