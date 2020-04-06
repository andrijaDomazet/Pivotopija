import React, { Component } from "react";
import Festivali19 from "./Festivali19/Festivali19.js";
import Smallbar from "../../components/Bars/Smallbar/Smallbar";
import "./Festivals.scss";

export default class Festivals extends Component {
  render() {
    return (
      <div className="festibox">
        <Smallbar />
        <div className="fstyle">
          <Festivali19 />
        </div>
      </div>
    );
  }
}
