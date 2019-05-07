import React, { Component } from "react";
// import BeerLady1 from "../Lender/lenderIMG/BeerLady1.png";
import "../Lender/Lender.scss";
import cover from "../../img/cover.jpg";
import ZanatskoPivoButton from "../Mainscreen/Buttons/ZanatskoPivoButton";
import PlutoButton from "../Mainscreen/Buttons/PlutoButton";

export default class Lender extends Component {
  state = {
    fotke: ["./img/lenderIMG/BeerLady1.png"]
  };

  pictureChange = () => {};

  render() {
    const { toggle2, toggle3 } = this.props;
    return (
      <div className="main_cover">
        <img src={cover} alt="" width="100%" height="100%" />
        <div className="lady">
          <img src={this.state.fotke[0]} alt="slika2" />
        </div>
        <div className="srednjeDugme">
          <ZanatskoPivoButton toggle2={toggle2} />
        </div>
        <div className="desnoDugme">
          <PlutoButton toggle3={toggle3} />
        </div>
      </div>
    );
  }
}
