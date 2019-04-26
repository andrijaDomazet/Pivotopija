import React, { Component } from "react";
import "./Objekat.scss";
import "./PodaciObjekta.scss";

export default class PodaciObjekta extends Component {
  state = {
    count: 0,
    numberOfComments: 0,
    showInfo: false
  };
  comment = () => {
    let newComment = this.state.numberOfComments + 1;
    this.setState({
      numberOfComments: newComment
    });
  };
  counter = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
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
          <span className="ocenjivanje">
            <p>{this.state.count} sviđanja</p>
            <button className="like" onClick={this.counter}>
              <i className="far fa-thumbs-up" />
            </button>
            <p>{this.state.numberOfComments} komentara</p>
            <button className="comments" onClick={this.comment}>
              <i className="far fa-comments" />
            </button>
          </span>
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
