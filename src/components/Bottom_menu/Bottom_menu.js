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
      <React.Fragment>
        <div className="bottom_cover">
          <div className="prviBaner">
            <Banner1 />
          </div>
          <div className="prviBaner">
            <Banner2 />
          </div>
          <div className="prviBaner">
            <Banner3 />
          </div>
          <div className="prviBaner">
            <Banner4 />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
