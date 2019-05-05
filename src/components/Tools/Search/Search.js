import React, { Component } from "react";
import "./Search.scss";
export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <p>Price range</p>
        {/* <input
          type="range"
          onInput="updateRangeInput(this)"
          name="pivo"
          id="procenatAbv"
          list="scale"
        /> */}
      </div>
    );
  }
}
