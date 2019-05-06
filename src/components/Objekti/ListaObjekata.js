import React, { Component, lazy, Suspense } from "react";
import "./ListaObjekata.scss";
import { spisakObjekta } from "../allData";
const Objekat = lazy(() => import("./Tools/Objekat"));

export default class ListaObjekata extends Component {
  state = {
    objekti: spisakObjekta,
    search1: "",
    search2: ""
  };

  updateSearch1 = event => {
    this.setState({ search1: event.target.value.substr(0, 20) });
  };
  updateSearch2 = event => {
    this.setState({ search2: event.target.value.substr(0, 20) });
  };

  removeObjekat = id => {
    const { objekti } = this.state;
    const filter = objekti.filter(objekat => objekat.id !== id);
    this.setState({
      objekti: filter
    });
  };

  render() {
    let filtiraniObjekti1 = this.state.objekti.filter(objekat => {
      return (
        objekat.city.toLowerCase().indexOf(this.state.search1.toLowerCase()) !==
        -1
      );
    });
    let filtiraniObjekti2 = this.state.objekti.filter(objekat => {
      return (
        objekat.name.toLowerCase().indexOf(this.state.search2.toLowerCase()) !==
        -1
      );
    });

    return (
      <div className="glavniDiv">
        <div className="pretraga">
          <div className="search_mesta">
            <input
              type="text"
              placeholder="Pretraga po lokaciji objekta"
              value={this.state.search}
              onChange={this.updateSearch1.bind(this)}
            />
          </div>
          <div className="search_imena">
            <input
              type="text"
              placeholder="Pretraga po nazivu objekta"
              value={this.state.search}
              onChange={this.updateSearch2.bind(this)}
            />
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <section className="objektiLista">
            {filtiraniObjekti1
              .filter(x => filtiraniObjekti2.includes(x))
              .map(objekat => {
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
