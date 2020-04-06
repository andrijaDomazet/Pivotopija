import React, { Component } from "react";
import { spisakPiva as beersList } from "../../allData";
import "./BeersList.scss";
import Pivo from "./Tools/Beer";

export default class BeersList extends Component {
  state = {
    beers: beersList,
    searchBeerName: "",
    searchBeerAlc: "",
  };

  updateSearch1 = (event) => {
    this.setState({ searchBeerName: event.target.value.substr(0, 20) });
  };
  updateSearch2 = (event) => {
    this.setState({ searchBeerAlc: event.target.value.substr(0, 20) });
  };
  render() {
    let filterPiva1 = this.state.beers.filter((beer) => {
      return (
        beer.name
          .toLowerCase()
          .indexOf(this.state.searchBeerName.toLowerCase()) !== -1
      );
    });
    let filterPiva2 = this.state.beers.filter((beer) => {
      return beer.name.indexOf(this.state.searchBeerAlc.toLowerCase()) !== -1;
    });
    return (
      <div className="glavniDiv">
        <div className="pretraga">
          <div className="search_imena_piva">
            <input
              type="text"
              placeholder="Pretraga po imenu piva"
              value={this.state.searchBeerName}
              onChange={this.updateSearch1.bind(this)}
            />
          </div>
          <div className="search_abv">
            <input
              type="text"
              placeholder="Pretraga po % alkohola"
              value={this.state.searchBeerAlc}
              onChange={this.updateSearch2.bind(this)}
            />
          </div>
        </div>
        <div className="lista_piva">
          {filterPiva1
            .filter((x) => filterPiva2.includes(x))
            .map((pivo) => {
              return <Pivo key={pivo.id} pivo={pivo} />;
            })}
        </div>
      </div>
    );
  }
}
