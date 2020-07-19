import React, { Component, lazy, Suspense } from "react";
import "./ObjectsList.scss";
import { spisakObjekta as objectsList } from "../../allData";
import Pagination from "../../UI/Pagination/Pagination";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import Marquee from "../Marquee/MarqueeBottom";
import { facilities } from "../../shared/shared";
const Objekat = lazy(() => import("./Tools/Objekat"));

export default class ObjectsList extends Component {
  state = {
    objects: objectsList,
    search1: "",
    search2: "",

    //state for pagination
    pageNum: 1,
    operationPerPage: 16,
    elemNum: [0, 15],
    //end
  };

  updateSearch1 = (event) => {
    this.setState({ search1: event.target.value.substr(0, 20) });
  };
  updateSearch2 = (event) => {
    this.setState({ search2: event.target.value.substr(0, 20) });
  };

  removeObjekat = (id) => {
    const { objects } = this.state;
    const filter = objects.filter((object) => object.id !== id);
    this.setState({
      objects: filter,
    });
  };
  // functions for Pagination ==========================
  componentDidMount = () => {
    this.setPageNumber();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.objects !== prevState.objects) {
      this.setPageNumber();
    }
  };
  setPageNumber = () => {
    this.setState({
      numberOfPages: Math.ceil(
        this.state.objects.length / this.state.operationPerPage
      ),
    });
  };
  setPaginationPage = (page) => {
    this.setState({
      elemNum: [
        (page - 1) * 15,
        (page - 1) * 15 + this.state.operationPerPage - 1,
      ],
      pageNum: page,
    });
    return this.state.objects.slice(
      this.state.elemNum[0],
      this.state.elemNum[1]
    );
  };
  //funkcija kojom se odredjuje da li ce se prikazati pagination
  //trenutno nije aktivna
  showPagination = () => {
    return this.state.group.length < this.state.operationPerPage ? "none" : "";
  };
  //====================== end =========================
  render() {
    let { filtriraniObjekti1, filtriraniObjekti2 } = this.newMethod();
    // console.log(this.state.objects);
    let filters12 = filtriraniObjekti1.filter((x) =>
      filtriraniObjekti2.includes(x)
    );
    const products = filters12.slice(
      this.state.elemNum[0],
      this.state.elemNum[1]
    );
    console.log(this.state.objects);
    console.log(facilities);

    return (
      <div className="objectsList">
        <div className="objectsList__search">
          <div className="pattern-dots-sm slategray h-5 marquee">
            <Marquee />
          </div>
          <input
            type="text"
            placeholder="Pretraga po gradu"
            value={this.state.search}
            onChange={this.updateSearch1.bind(this)}
          />
          <input
            type="text"
            placeholder="Pretraga po nazivu"
            value={this.state.search}
            onChange={this.updateSearch2.bind(this)}
          />
          <div className="objectsList__search-more">
            <div>
              {facilities.map((facility, index) => {
                console.log(Object.values(facility));

                return (
                  <div className="facility" key={index}>
                    <div></div>
                    <div>{Object.values(facility)[0]}</div>
                  </div>
                );
              })}
            </div>
            More search options comming soon...
          </div>
          <GoogleMap />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="objectsList__objects">
            <section className="objectsList__objects__obj">
              {products.map((objekat) => {
                return (
                  <Objekat
                    key={objekat.id}
                    objekat={objekat}
                    removeObjekat={this.removeObjekat}
                  />
                );
              })}
              <Pagination
                numberOfPages={this.state.numberOfPages}
                pageNum={this.state.pageNum}
                clicked={this.setPaginationPage}
              />
            </section>
          </div>
        </Suspense>
      </div>
    );
  }

  newMethod() {
    let filtriraniObjekti1 = this.state.objects.filter((objekat) => {
      return (
        objekat.city
          .toLowerCase()
          .substring(0, this.state.search1.length)
          .indexOf(this.state.search1.toLowerCase()) !== -1
      );
    });
    let filtriraniObjekti2 = this.state.objects.filter((objekat) => {
      return (
        objekat.name
          .toLowerCase()
          .substring(0, this.state.search2.length)
          .indexOf(this.state.search2.toLowerCase()) !== -1
      );
    });
    return { filtriraniObjekti1, filtriraniObjekti2 };
  }
}
