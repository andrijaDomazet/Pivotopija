import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "./Bottom_menu.scss";
import { spisakObjekta } from "../allData";
import InfoObjekta from "../../containers/Objekti/Tools/InfoObjekta";

export default class Banner1 extends Component {
  state = {
    objekti: spisakObjekta,
    pozicija: 0,
    prikazInfoObjekta: false
  };

  componentDidMount = () => {
    this.state.intervalId = setInterval(this.timerB1, 5000);
  };
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  timerB1 = () => {
    if (this.state.pozicija === this.state.objekti.length - 1) {
      this.setState({ pozicija: 0 });
    }
    this.setState({ pozicija: this.state.pozicija + 1 });
    console.log(this.state.pozicija);
  };

  okidacInfoObjekta = () => {
    this.componentWillUnmount();
    this.setState(prevState => {
      return { prikazInfoObjekta: !prevState.prikazInfoObjekta };
    });
  };
  removeCommentBox = () => {
    this.componentDidMount();
    this.setState({
      prikazInfoObjekta: false
    });
  };
  render() {
    var randomObjekat = this.state.objekti[this.state.pozicija];

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
              <InfoObjekta
                removeCommentBox={this.removeCommentBox}
                podaci={randomObjekat}
                show={this.state.prikazInfoObjekta}
              />
              <div className="banner1-slika">
                <img
                  src={this.state.objekti[this.state.pozicija].img}
                  alt=""
                  onClick={this.okidacInfoObjekta}
                />
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
