import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "../BottomMenu/Bottom_menu.scss";
import { spisakObjekta } from "../allData";
import InfoObjekta from "../../containers/Objekti/Tools/InfoObjekta";

export default class Banner1 extends Component {
  state = {
    object: spisakObjekta,
    position: 0,
    prikazInfoObjekta: false
  };

  componentDidMount = () => {
    this.setState({ intervalId: setInterval(this.timerB1, 5000) });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  timerB1 = () => {
    const { position, object } = this.state;
    position === object.length - 1
      ? this.setState({ position: 0 })
      : this.setState({ position: position + 1 });
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
    const { object, position } = this.state;
    var randomObjekat = object[position];

    var name =
      randomObjekat.name.substring(0, 1).toUpperCase() +
      randomObjekat.name.substring(1).toLowerCase();

    var city =
      randomObjekat.city.substring(0, 1).toUpperCase() +
      randomObjekat.city.substring(1).toLowerCase();

    // console.log(this.state.position);

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
                  src={this.state.object[this.state.position].img}
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
