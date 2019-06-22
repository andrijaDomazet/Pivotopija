import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "./Bottom_menu.scss";
import { spisakPiva } from "../SpisakPiva";

export default class Banner2 extends Component {
  state = {
    piva: spisakPiva,
    pozicijaPiva: 0
  };

  componentDidMount = () => {
    this.state.intervalId = setInterval(this.timerB2, 7000);
    this.setState({
      pozicijaPiva: Math.floor(
        Math.random() * (this.state.piva.length - 1 - 0) + 0
      )
    });
  };
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };
  timerB2 = () => {
    if (this.state.pozicijaPiva === this.state.piva.length - 1) {
      this.setState({ pozicijaPiva: 0 });
    }
    this.setState({ pozicijaPiva: this.state.pozicijaPiva + 1 });
  };

  render() {
    var randomPivo = this.state.piva[this.state.pozicijaPiva];

    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1500, duration: 2000 }}
      >
        {props => (
          <div style={props}>
            <div className="banners">
              <div className="banner2-slika">
                <img src={randomPivo.img} alt="" />
              </div>
              <p>
                {this.state.pozicijaPiva} {randomPivo.name}
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
