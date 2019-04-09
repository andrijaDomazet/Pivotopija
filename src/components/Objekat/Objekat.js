import React, { Component } from "react";
import "./Objekat.scss";

export default class Objekat extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.objekat;
    const { removeObjekat } = this.props;
    return (
      <article className="objekat">
        <div className="img-container">
          <img src={img} alt="" />
          <span className="ocenjivanje">
            <i className="far fa-thumbs-up" />
            <i className="far fa-thumbs-down" />
          </span>
          <span
            className="close-btn"
            onClick={() => {
              removeObjekat(id);
            }}
          >
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="objekat-info">
          <span />
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
