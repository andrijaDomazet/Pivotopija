import React, { Component, lazy, Suspense } from "react";
import "./ObjectsList.scss";
import { spisakObjekta as objectsList } from "../../allData";
import Pagination from "../../UI/Pagination/Pagination";
import Marquee from "../Marquee/MarqueeBottom";
import { facilities, searchOption } from "../../shared/shared";
import Map from "../../components/GoogleMap/Map";
const Objekat = lazy(() => import("./Tools/Objekat"));

export default class ObjectsList extends Component {
  state = {
    search1: "",
    search2: "",
    search3: "",
    selectedObjects: objectsList,
    setSearch: objectsList, //????????????????????????????
    //state for pagination
    pageNum: 1,
    operationPerPage: 16,
    elemNum: [0, 15],
    //end
  };

  updateSearch = (event) => {
    event.target.id === "city"
      ? this.setState({ search1: event.target.value.substr(0, 20) })
      : event.target.id === "name"
      ? this.setState({ search2: event.target.value.substr(0, 20) })
      : this.setState({ search3: event.target.value });
  };
  removeObjekat = (id) => {
    const filter = objectsList.filter((object) => object.id !== id);
    this.setState({
      objects: filter,
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.state.search1 !== prevState.search1 ||
      this.state.search2 !== prevState.search2 ||
      this.state.search3 !== prevState.search3 ||
      this.state.elemNum !== prevState.elemNum
    ) {
      this.searchMethod();
    }
  };
  // functions for Pagination ==========================
  componentDidMount = () => {
    this.setPageNumber();
    this.searchMethod();
  };
  setPageNumber = (e) => {
    this.setState({
      numberOfPages: Math.ceil(
        this.state.selectedObjects.length / this.state.operationPerPage
      ),
    });
    // this.setPaginationPage();
  };
  setPaginationPage = (page) => {
    console.log("Page", page);
    this.setState({
      elemNum: [
        (page - 1) * 15,
        (page - 1) * 15 + this.state.operationPerPage - 1,
      ],
      pageNum: page,
    });
  };
  //funkcija kojom se odredjuje da li ce se prikazati pagination
  //trenutno nije aktivna
  showPagination = () => {
    return this.state.group.length < this.state.operationPerPage ? "none" : "";
  };
  //====================== end =========================
  render() {
    return (
      <div className="objectsList">
        <div className="objectsList__search">
          <Marquee />
          {searchOption.map((option, index) => {
            return (
              <input
                // key={index}
                id={option.id}
                type="text"
                placeholder={option.placeholder}
                onChange={this.updateSearch.bind(this)}
              />
            );
          })}
          {/* <input
            id="city"
            type="text"
            placeholder="Pretraga po gradu"
            onChange={this.updateSearch.bind(this)}
          />
          <input
            id="name"
            type="text"
            placeholder="Pretraga po nazivu"
            onChange={this.updateSearch.bind(this)}
          /> */}
          <div className="objectsList__search-more">
            <div>
              {facilities.map((facility, index) => {
                return (
                  <div className="facility" key={index}>
                    <input
                      id="facility"
                      className="facility-input"
                      type="checkbox"
                      value={Object.keys(facility)[0]}
                      onChange={this.updateSearch.bind(this)}
                    />
                    <div>{Object.values(facility)[0]}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsyH8AB-hYPNakYSmKWs4C39m0ztql6yw"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `80%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            places={this.state.selectedObjects}
          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="objectsList__objects">
            <section className="objectsList__objects__obj">
              {this.state.setSearch.map((objekat) => {
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
    let filtriraniObjekti1 = objectsList.filter((objekat) => {
      return (
        objekat.city
          .toLowerCase()
          .substring(0, this.state.search1.length)
          .indexOf(this.state.search1.toLowerCase()) !== -1
      );
    });
    let filtriraniObjekti2 = objectsList.filter((objekat) => {
      return (
        objekat.name
          .toLowerCase()
          .substring(0, this.state.search2.length)
          .indexOf(this.state.search2.toLowerCase()) !== -1
      );
    });
    let filtriraniObjekti3 = objectsList.filter((objekat) => {
      if (this.state.search3 === "petFriendly") {
        return objekat.facilities.petFriendly === true;
      } else if (this.state.search3 === "liveMusic") {
        return objekat.facilities.liveMusic === true;
      } else if (this.state.search3 === "food") {
        return objekat.facilities.food === true;
      } else if (this.state.search3 === "wifi") {
        return objekat.facilities.wifi === true;
      } else {
        return true;
      }
    });
    let filters12 = filtriraniObjekti1
      .filter((filtrObj) => {
        return filtriraniObjekti2.includes(filtrObj);
      })
      .filter((obj) => {
        return filtriraniObjekti3.includes(obj);
      });
    const products = filters12.slice(
      this.state.elemNum[0],
      this.state.elemNum[1]
    );
    this.setState({ selectedObjects: filters12, setSearch: products });
  }
}
