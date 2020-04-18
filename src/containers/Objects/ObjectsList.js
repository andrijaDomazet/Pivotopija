import React, { Component, lazy, Suspense } from "react";
import "./ObjectsList.scss";
import { spisakObjekta as objectsList } from "../../allData";
import Pagination from "../../UI/Pagination/Pagination";
const Objekat = lazy(() => import("./Tools/Objekat"));

export default class ObjectsList extends Component {
  state = {
    objects: objectsList,
    search1: "",
    search2: "",

    //state for pagination
    pageNum: 1,
    operationPerPage: 17,
    elemNum: [0, 16],
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
    if (this.state.group !== prevState.group) {
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
        (page - 1) * 16,
        (page - 1) * 16 + this.state.operationPerPage - 1,
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
    let { filtiraniObjekti1, filtiraniObjekti2 } = this.newMethod();
    console.log(this.state.objects);
    let filters12 = filtiraniObjekti1.filter((x) =>
      filtiraniObjekti2.includes(x)
    );
    const products = filters12.slice(
      this.state.elemNum[0],
      this.state.elemNum[1]
    );
    return (
      <div className="objectsList">
        <div className="objectsList__search">
          <input
            type="text"
            placeholder="Pretraga po lokaciji objekta"
            value={this.state.search}
            onChange={this.updateSearch1.bind(this)}
          />
          <input
            type="text"
            placeholder="Pretraga po nazivu objekta"
            value={this.state.search}
            onChange={this.updateSearch2.bind(this)}
          />
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
            </section>
            <Pagination
              numberOfPages={this.state.numberOfPages}
              pageNum={this.state.pageNum}
              clicked={this.setPaginationPage}
            />
          </div>
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
