import React, { Component } from "react";
import "./ListaObjekata.scss";
import Objekat from "./Objekat";
import { spisakObjekta } from "../allData";
import Search from "../Tools/Search/Search";

export default class ListaObjekata extends Component {
  state = {
    objekti: spisakObjekta
  };
  removeObjekat = id => {
    const { objekti } = this.state;
    const filter = objekti.filter(objekat => objekat.id !== id);
    this.setState({
      objekti: filter
    });
  };
  render() {
    const { objekti } = this.state;
    return (
      <div className="glavniDiv">
        <section className="objektiLista">
          {objekti.map(objekat => {
            return (
              <Objekat
                key={objekat.id}
                objekat={objekat}
                removeObjekat={this.removeObjekat}
              />
            );
          })}
        </section>{" "}
        <Search />
      </div>
    );
  }
}
