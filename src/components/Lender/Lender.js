import React, { Component } from "react";
// import BeerLady1 from "../Lender/lenderIMG/BeerLady1.png";
import "../Lender/Lender.scss";
import cover from "../../img/cover2.jpg";
import ZanatskoPivoButton from "../../UI/Buttons/ZanatskoPivoButton";
import PlutoButton from "../../containers/Mainscreen/Mainscreen";
import PreporucenoPivo from "../../UI/Buttons/PreporucenoPivo";

export default class Lender extends Component {
  state = {
    cover: ["./img/lenderIMG/cover.jpg", "./img/lenderIMG/cover2.jpg"],
    fotke: ["./img/lenderIMG/BeerLady1.png"],
    coverPosition: 0,
    display: ["", "none"],
    displayPosition: 0,
    display2: ["none", ""]
  };

  componentDidMount = () => {
    var intervalId = setInterval(this.reklama, 10000);
  };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  reklama = () => {
    if (this.state.coverPosition === this.state.cover.length - 1) {
      return this.setState({
        coverPosition: 0,
        displayPosition: 0
      });
    }
    this.setState({
      coverPosition: this.state.coverPosition + 1,
      displayPosition: this.state.displayPosition + 1,
      displayPosition2: this.state.displayPosition + 1
    });
  };

  render() {
    const { toggle2, toggle3 } = this.props;
    return (
      <div className="main_cover">
        <img src={this.state.cover[this.state.coverPosition]} alt="cover" />
        <div
          className="lady"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <img src={this.state.fotke[0]} alt="slika2" />
        </div>
        {/* <div
          className="srednjeDugme"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <ZanatskoPivoButton toggle2={toggle2} />
        </div>
        <div
          className="desnoDugme"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <PlutoButton toggle3={toggle3} />
        </div>
        <div
          className="preporucenoPivo"
          style={{ display: this.state.display2[this.state.displayPosition] }}
        >
          <PreporucenoPivo />
        </div> */}
      </div>
    );
  }
}
