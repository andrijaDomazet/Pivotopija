import React, { Component } from "react";
import "./Bottom_menu.scss";
import Banner1 from "./Banner1";
import Banner2 from "./Banner3";
import Banner3 from "./Banner2";
import Slider from "./Slider";

export default class BottomCover extends Component {
  render() {
    return (
      <div className="bottom__menu">
        <div className="bottom__menu1">
          <Banner1 />
        </div>
        <div className="bottom__menu2">
          <Banner2 />
        </div>
        <div className="bottom__menu3">
          <Slider />
        </div>
        <div className="bottom__menu4">
          <Banner3 />
        </div>
      </div>
    );
  }
}
