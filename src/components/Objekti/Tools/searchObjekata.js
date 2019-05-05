import React, { Component } from "react";
import "./searchObjekata.scss";
import { spisakObjekta } from "../../allData";

export default class SearchObjekata extends Component {
  render() {
    // const { search } = this.props.search;
    // console.log(this.props);

    return (
      <div className="search_objekata">
        <input
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </div>
    );
  }
}
