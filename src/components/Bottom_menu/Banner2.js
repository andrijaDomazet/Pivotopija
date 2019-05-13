import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "./Bottom_menu.scss";
import { spisakPiva } from "../SpisakPiva";

export default class Banner2 extends Component {
  state = {
    piva: spisakPiva
  };
  render() {
    var randomPivo = this.state.piva[Math.floor(Math.random() * (20 - 0)) + 0];
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
              <p>{randomPivo.name}</p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
