import React, { Component } from "react";
import "./Objekat.scss";
import "./PodaciObjekta.scss";

export default class PodaciObjekta extends Component {
  state = {
    showInfo: false
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
        <span />
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info
          <span onClick={this.handleInfo}>
            <i className="fas fa-caret-square-down" />
          </span>
        </h5>
        {this.state.showInfo && <p>{info}</p>}
      </div>
    );
  }
}
