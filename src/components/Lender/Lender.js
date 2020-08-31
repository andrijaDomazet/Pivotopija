import React, { Component } from "react";
import "../Lender/Lender.scss";
import SimpleButton from "../../UI/Buttons/SimpleButton";
import srednjiLogo from "./lenderIMG/srednjilogo.png";
import bottle from "./lenderIMG/pluto.png";
export default class Lender extends Component {
  state = {
    cover: ["./img/lenderIMG/cover3.jpg", "./img/lenderIMG/cover2.jpg"],
    fotke: ["./img/lenderIMG/BeerLady1.png"],
    coverPosition: 0,
    display: ["", "none"],
    displayPosition: 0,
    display2: ["none", ""],
  };

  componentDidMount = () => {
    var intervalId = setInterval(this.changeCover, 100000);
  };
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  changeCover = () => {
    if (this.state.coverPosition === this.state.cover.length - 1) {
      return this.setState({
        coverPosition: 0,
        displayPosition: 0,
      });
    }
    this.setState({
      coverPosition: this.state.coverPosition + 1,
      displayPosition: this.state.displayPosition + 1,
      displayPosition2: this.state.displayPosition + 1,
    });
  };

  render() {
    return (
      <div className="cover">
        <img src={this.state.cover[this.state.coverPosition]} alt="cover" />
        <div
          className="lady"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <img src={this.state.fotke[0]} alt="beer" />
        </div>
        <div
          className="centerButton"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <SimpleButton
            classes="craftBeersButton"
            clicked={this.redirectFunc("craftBeer")}
          >
            <img src={srednjiLogo} alt="craftBeer" />
          </SimpleButton>
        </div>
        <div
          className="desnoDugme"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <img src={bottle} alt="bottle" onClick={this.redirectFunc()} />
        </div>
        <div
          style={{ display: this.state.display2[this.state.displayPosition] }}
        >
          <SimpleButton classes="preporucenoPivo" children={"PIVO MESECA..."} />
        </div>
      </div>
    );
  }

  redirectFunc(e) {
    return () => {
      this.props.redirect(e);
    };
  }
}
