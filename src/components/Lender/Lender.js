import React, { Component } from "react";
import "../Lender/Lender.scss";
import PreporucenoPivo from "../../UI/Buttons/PreporucenoPivo";
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
    setInterval(this.changeCover, 500000);
  };
  // componentWillUpdate = () => {
  //   if (this.state.displayPosition === 0) {
  //     console.log("Interval", 0);
  //     clearInterval(this.state.intervalId);
  //     var intervalId = setInterval(this.reklama, 20000);
  //   } else {
  //     console.log("Interval", 1);
  //     clearInterval(this.state.intervalId);
  //     var intervalId = setInterval(this.reklama, 5000);
  //   }
  // };
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
    const { toggle3 } = this.props;
    return (
      <div className="main_cover">
        <img src={this.state.cover[this.state.coverPosition]} alt="cover" />
        <div
          className="lady"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <img src={this.state.fotke[0]} alt="slika2" />
        </div>
        <div
          className="srednjeDugme"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <SimpleButton
            classes="craftBeersButton"
            clicked={this.showCraftBeers()}
          >
            <img src={srednjiLogo} alt="craftBeers" />
          </SimpleButton>
        </div>
        <div
          className="desnoDugme"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <SimpleButton
            classes="btn__pluto"
            clicked={this.showBeerSuggestion()}
          >
            <img src={bottle} alt="bottle" />
          </SimpleButton>
        </div>
        <div
          className="preporucenoPivo"
          style={{ display: this.state.display2[this.state.displayPosition] }}
        >
          <PreporucenoPivo />
        </div>
      </div>
    );
  }

  showBeerSuggestion() {
    return () => {
      this.props.toggle3();
    };
  }

  showCraftBeers() {
    return () => {
      this.props.toggle2();
    };
  }
}
