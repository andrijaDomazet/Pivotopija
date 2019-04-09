import React, { Component } from "react";
// import Slider from "../Carousel/Slider";
// import Caurusel from "../../Carousel/Cauresel";
import Slider from "../Carousel/Slider";
import Slider2 from "../Carousel/Slider2";
import Slider3 from "../Carousel/Slider3";
import { Transition, animated } from "react-spring/renderprops";
// import { animated } from "react-spring/renderprops-universal";
export default class Info extends Component {
  state = {
    showSlider3: false
  };
  toggle = e => this.setState({ showSlider3: !this.state.showSlider3 });
  render() {
    return (
      <div className="app">
        <Slider />
        <Slider2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showSlider3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Slider3 />{" "}
              </animated.div>
            ))
          }
        </Transition>
      </div>
    );
  }
}
