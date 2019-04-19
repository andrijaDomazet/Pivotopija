import React, { Component, lazy, Suspense } from "react";
import "./ListaObjekata.scss";
import { spisakObjekta } from "../allData";
const Objekat = lazy(() => import("./Tools/Objekat"));

export default class ListaObjekata extends Component {
  constructor() {
    super();
    this.state = {
      objekti: spisakObjekta,
      search: ""
    };
  }

  updateSearch = event => {
    this.setState({ search: event.target.value.substr(0, 20) });
    console.log(this.state.search);
  };

  removeObjekat = id => {
    const { objekti } = this.state;
    const filter = objekti.filter(objekat => objekat.id !== id);
    this.setState({
      objekti: filter
    });
  };

  render() {
    console.log(this.state.objekti);
    let filtiraniObjekti = this.state.objekti.filter(objekat => {
      return (
        objekat.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    const { objekti } = this.state;
    // console.log(this.props);
    return (
      <div className="glavniDiv">
        <div className="search_objekata">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <section className="objektiLista">
            {filtiraniObjekti.map(objekat => {
              return (
                <Objekat
                  key={objekat.id}
                  // key={i}
                  objekat={objekat}
                  removeObjekat={this.removeObjekat}
                />
              );
            })}
          </section>
        </Suspense>
      </div>
    );
  }
}
