import React, { Component, lazy, Suspense } from "react";
import "./ObjectsList.scss";
import { spisakObjekta as objectsList } from "../../allData";
const Objekat = lazy(() => import("./Tools/Objekat"));

export default class ObjectsList extends Component {
  state = {
    objects: objectsList,
    search1: "",
    search2: "",
  };

  updateSearch1 = (event) => {
    this.setState({ search1: event.target.value.substr(0, 20) });
  };
  updateSearch2 = (event) => {
    this.setState({ search2: event.target.value.substr(0, 20) });
  };

  removeObjekat = (id) => {
    const { objects: objekti } = this.state;
    const filter = objekti.filter((objekat) => objekat.id !== id);
    this.setState({
      objekti: filter,
    });
  };

  render() {
    let { filtiraniObjekti1, filtiraniObjekti2 } = this.newMethod();

    return (
      <div className="objectsList">
        <div className="pretraga">
          <div className="objectsList__search">
            <input
              type="text"
              placeholder="Pretraga po lokaciji objekta"
              value={this.state.search}
              onChange={this.updateSearch1.bind(this)}
            />
          </div>
          <div className="objectsList__search">
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
              .filter((x) => filtiraniObjekti2.includes(x))
              .map((objekat) => {
                return (
                  <Objekat
                    key={objekat.id}
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

  newMethod() {
    let filtiraniObjekti1 = this.state.objects.filter((objekat) => {
      return (
        objekat.city.toLowerCase().indexOf(this.state.search1.toLowerCase()) !==
        -1
      );
    });
    let filtiraniObjekti2 = this.state.objects.filter((objekat) => {
      return (
        objekat.name.toLowerCase().indexOf(this.state.search2.toLowerCase()) !==
        -1
      );
    });
    return { filtiraniObjekti1, filtiraniObjekti2 };
  }
}
