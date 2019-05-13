import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "./Bottom_menu.scss";
import { spisakObjekta } from "../allData";

export default class Banner1 extends Component {
  state = {
    objekti: spisakObjekta,
    pozicija: 0
    // intervalId: 0
  };

  componentDidMount = () => {
    var intervalId = setInterval(this.timerB1, 22000);
  };
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };
  timerB1 = () => {
    this.setState({ pozicija: this.state.pozicija + 1 });
  };

  render() {
    var randomObjekat = this.state.objekti[this.state.pozicija];
    console.log(randomObjekat);

    var name =
      randomObjekat.name.substring(0, 1).toUpperCase() +
      randomObjekat.name.substring(1).toLowerCase();

    var city =
      randomObjekat.city.substring(0, 1).toUpperCase() +
      randomObjekat.city.substring(1).toLowerCase();
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 2000 }}
      >
        {props => (
          <div style={props}>
            <div className="banners">
              <div className="banner1-slika">
                <img src={this.state.objekti[this.state.pozicija].img} alt="" />
              </div>

              <p>
                {name} ({city})
              </p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
