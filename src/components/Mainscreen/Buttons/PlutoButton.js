import React, { Component } from "react";
import "./PlutoButton.scss";
import pluto1 from "../../Lender/lenderIMG/pluto.png";

export default class PlutoButton extends Component {
  state = {
    fotke: ["../../Lender/lenderIMG/pluto.png", "pluto2"]
  };
  render() {
    const { toggle3 } = this.props;
    // const{pluto1} = this.props;
    console.log(this.state.fotke[0]);

    return (
      <div>
        <button className="btn_pluto" onClick={toggle3}>
          <img src={pluto1} alt="" />
        </button>
      </div>
    );
  }
}
