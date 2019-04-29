import React, { Component } from "react";
// import No_drink from "../../img/no_drink.jpg";
import "./Bottom_menu.scss";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";

export default class BottomCover extends Component {
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
          <Banner3 />
        </div>
        <div className="d-inline-flex p-2 col-example">
          <Banner4 />
        </div>
      </div>
    );
  }
}
