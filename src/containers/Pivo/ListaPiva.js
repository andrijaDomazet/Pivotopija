import React, { Component } from "react";
import { spisakPiva } from "../../components/allData";
import "./ListaPiva.scss";
import Pivo from "./Pivo";

export default class ListaPiva extends Component {
  state = {
    piva: spisakPiva,
    searchPiva1: "",
    searchPiva2: ""
  };

  updateSearch1 = event => {
    this.setState({ searchPiva1: event.target.value.substr(0, 20) });
  };
  updateSearch2 = event => {
    this.setState({ searchPiva2: event.target.value.substr(0, 20) });
  };
  render() {
    let filterPiva1 = this.state.piva.filter(pivo => {
      return (
        pivo.name
          .toLowerCase()
          .indexOf(this.state.searchPiva1.toLowerCase()) !== -1
      );
    });
    let filterPiva2 = this.state.piva.filter(pivo => {
      return pivo.abv !== -1;
    });
    return (
      <div className="glavniDiv">
        <div className="pretraga">
          <div className="search_imena_piva">
            <input
              type="text"
              placeholder="Pretraga po imenu piva"
              value={this.state.searchPiva1}
              onChange={this.updateSearch1.bind(this)}
            />
          </div>
          <div className="search_abv">
            <input
              type="number"
              placeholder="Pretraga po % alkohola"
              value={this.state.searchPiva2}
              onChange={this.updateSearch2.bind(this)}
            />
          </div>
        </div>
        <div className="lista_piva">
          {filterPiva1
            .filter(x => filterPiva2.includes(x))
            .map(pivo => {
              return <Pivo key={pivo.id} pivo={pivo} />;
            })}
        </div>
      </div>
    );
  }
}
