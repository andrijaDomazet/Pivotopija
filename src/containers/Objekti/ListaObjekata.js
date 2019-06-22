import React, { Component, lazy, Suspense } from "react";
import "./ListaObjekata.scss";
import { spisakObjekta } from "../../components/allData";
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
      <div className="objekti-glavniDiv">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="objekti-body">
            <div className="objekti-body-left">
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
              <div className="objekti-mapa">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.953980873315!2d20.409139615444435!3d44.802126485395874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f92363f1881%3A0x550c0955fccddcc2!2z0KHQsNCy0YHQutC4INC90LDRgdC40L8gNywg0JHQtdC-0LPRgNCw0LQgMTEwNzA!5e0!3m2!1ssr!2srs!4v1560939287558!5m2!1ssr!2srs"
                  // width="100%"
                  height="500vh"
                  // frameBorder="0"
                  // style={{ border: 0, padding: "0 10px 10px" }}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="objekti-lista">
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
            </div>
          </div>
        </Suspense>
      </div>
    );
  }
}
