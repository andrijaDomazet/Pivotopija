import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "../BottomMenu/Bottom_menu.scss";
import { listOfBeer } from "../SpisakPiva";

export default class Banner2 extends Component {
  state = {
    beer: listOfBeer,
    beerPosition: 0
  };

  //set interval for banner2 and define random beer position
  componentDidMount = () => {
    this.setState({
      intervalId: setInterval(this.timerB2, 7000),
      beerPosition: Math.floor(
        Math.random() * (this.state.beer.length - 1 - 0) + 0
      )
    });
  };

  // componentWillUnmount use for stop and cleanup timers networ requests ect. that were created in componentDidMount
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  //this function will be invoked by interval in componentDidMount
  timerB2 = () => {
    const { beerPosition, beer } = this.state;
    beerPosition === beer.length - 1
      ? this.setState({ beerPosition: 0 })
      : this.setState({ beerPosition: beerPosition + 1 });
  };

  render() {
    const { beer, beerPosition } = this.state;
    var randomPivo = beer[beerPosition];

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
                {beerPosition}. {randomPivo.name}
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
