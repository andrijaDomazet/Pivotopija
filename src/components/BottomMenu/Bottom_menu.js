import React, { Component } from "react";
import "./Bottom_menu.scss";
import Banner1 from "../Banners/Banner1";
import Banner2 from "../Banners/Banner3";
import Banner3 from "../Banners/Banner2";
import Slider from "../Slajder/Slider";

export default class Bottom_menu extends Component {
  render() {
    return (
      <div className="d-flex p-2 col-example">
        <div className="d-inline-flex p-2 col-example">
          <Banner1 />
        </div>
        <div className="d-inline-flex p-2 col-example">
          <Banner2 />
        </div>
        <div className="d-inline-flex p-2 col-example">
          <Slider />
        </div>
        <div className="d-inline-flex p-2 col-example">
          <Banner3 />
        </div>
      </div>
    );
  }
}
