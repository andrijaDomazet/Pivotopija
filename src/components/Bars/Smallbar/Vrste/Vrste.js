import React, { Component } from "react";
import Ale from "./Ale/Ale.js";
import Lager from "./Lager/Lager.js";
import Stout from "./Stout/Stout.js";
import Porter from "./Porter/Porter.js";
import Smallbar from "../Smallbar";
import "./Vrste.scss";

export default class Vrste extends Component {
  render() {
    return (
      <div>
        {/* <Smallbar /> */}
        <div className="vrstestyle">
          <Ale />
          <Lager />
          <Stout />
          <Porter />
        </div>
      </div>
    );
  }
}
