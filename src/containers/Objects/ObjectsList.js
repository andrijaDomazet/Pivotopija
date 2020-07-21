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
    search3: "",

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
  updateSearch3 = (event) => {
    this.setState({ search3: event.target.value });
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
    //search filter
    let {
      filtriraniObjekti1,
      filtriraniObjekti2,
      filtriraniObjekti3,
    } = this.searchMethod();
    let filters12 = filtriraniObjekti1
      .filter((filtrObj) => {
        return filtriraniObjekti2.includes(filtrObj);
      })
      .filter((obj) => {
        return filtriraniObjekti3.includes(obj);
      });

    //pagination
    const products = filters12.slice(
      this.state.elemNum[0],
      this.state.elemNum[1]
    );
    return (
      <div className="objectsList">
        <div className="objectsList__search">
          <Marquee />
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
                return (
                  <div className="facility" key={index}>
                    <input
                      className="facility-input"
                      type="checkbox"
                      value={Object.keys(facility)[0]}
                      onChange={this.updateSearch3.bind(this)}
                    />
                    <div>{Object.values(facility)[0]}</div>
                  </div>
                );
              })}
            </div>
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

  searchMethod() {
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
    let filtriraniObjekti3 = this.state.objects.filter((objekat) => {
      if (this.state.search3 == "") {
        return true;
      } else if (this.state.search3 === "petFriendly") {
        return objekat.facilities.petFriendly === true;
      } else if (this.state.search3 === "liveMusic") {
        return objekat.facilities.liveMusic === true;
      } else if (this.state.search3 === "food") {
        return objekat.facilities.food === true;
      } else if (this.state.search3 === "wifi") {
        return objekat.facilities.wifi === true;
      } else {
        // return objekat.facilities.food === true;
      }
    });
    return { filtriraniObjekti1, filtriraniObjekti2, filtriraniObjekti3 };
  }
}
