import React, { Component } from "react";
import "./PlutoButton.scss";

export default class PlutoButton extends Component {
  state = {
    fotke: ["./img/lenderIMG/pluto.png", "pluto2"]
  };
  render() {
    const { toggle3 } = this.props;

    return (
      <div>
        <button className="btn_pluto" onClick={toggle3}>
          <img src={this.state.fotke[0]} alt="" />
        </button>
      </div>
    );
  }
}
