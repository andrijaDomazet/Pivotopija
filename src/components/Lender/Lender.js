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
    setInterval(this.changeCover, 10000);
  };
  // componentDidUpdate = (prevProps, prevState) => {
  // if (this.state.displayPosition !== prevState.displayPosition) {
  // clearInterval(this.state.intervalId);
  // var intervalId = setInterval(this.reklama, 1000);
  // this.setState({ interval: setInterval(this.reklama, 1000) });
  // }
  // if (this.state.displayPosition === 0) {
  //   console.log("Interval", 0);
  //   clearInterval(this.state.intervalId);
  //   var intervalId = setInterval(this.reklama, 10000);
  // } else {
  //   console.log("Interval", 1);
  //   clearInterval(this.state.intervalId);
  //   var intervalId = setInterval(this.reklama, 1000);
  // }
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
    // const { toggle3 } = this.props;
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
            clicked={this.redirectFunc("craftBeer")}
          >
            <img src={srednjiLogo} alt="craftBeer" />
          </SimpleButton>
        </div>
        <div
          className="desnoDugme"
          style={{ display: this.state.display[this.state.displayPosition] }}
        >
          <SimpleButton classes="btn__pluto" clicked={this.redirectFunc()}>
            <img src={bottle} alt="bottle" />
          </SimpleButton>
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
