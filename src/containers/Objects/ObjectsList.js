import React, { Component, lazy, Suspense } from "react";
import "./ObjectsList.scss";
import Pagination from "../../UI/Pagination/Pagination";
import Marquee from "../Marquee/MarqueeBottom";
import { objectsList } from "../../allData";
import { facilities, searchOption } from "../../shared/shared";
import Map from "../../components/GoogleMap/Map";
const Objekat = lazy(() => import("./Tools/Objekat"));

export default class ObjectsList extends Component {
  state = {
    search1: "",
    search2: "",
    search3: [],
    objectsList: objectsList,
    //state for pagination
    pageNum: 1,
    operationPerPage: 16,
    elemNum: [0, 15],
    //end
    screen: "",
    onBigScreen: objectsList[0],
    showOnMap: 0,
  };
  componentWillMount = () => {
    this.promiseFunc();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.state.objectsList !== prevState.objectsList ||
      this.state.search1 !== prevState.search1 ||
      this.state.search2 !== prevState.search2 ||
      this.state.search3 !== prevState.search3 ||
      this.state.elemNum !== prevState.elemNum
    ) {
      this.promiseFunc();
    }
  };
  promiseFunc = () => {
    const promise2 = new Promise((resolve, reject) => {
      resolve("Success");
      this.searchMethod();
    });
    promise2.then(() => {
      this.setPageNumber();
    });
  };
  changeScreen = (e) => {
    let a = this.state.objectsList.filter((objekat) => objekat.id === e.id);
    this.setState({
      onBigScreen: a[0],
      screen: "bigScreen",
    });
  };
  setSmallObjects = () => {
    this.setState({ screen: "" });
  };
  showOnMap = (e) => {
    this.setState({ showOnMap: e });
  };
  updateSearch = (event) => {
    this.setState({ screen: "" });

    event.target.id === "city"
      ? this.setState({
          search1: event.target.value.substr(0, 20),
        })
      : event.target.id === "name"
      ? this.setState({ search2: event.target.value.substr(0, 20) })
      : (() => {
          let arr = this.state.search3.flatMap((x) => Object.keys(x));
          if (arr.indexOf(event.target.value) !== -1) {
            let currentSearch3 = this.state.search3;
            let search3Filtered = currentSearch3.filter((item) => {
              return Object.keys(item)[0] !== event.target.value;
            });
            this.setState({ search3: search3Filtered });
          } else {
            let e = {};
            e[event.target.value] = true;
            this.setState({ search3: [...this.state.search3, e] });
          }
        })(this);
  };
  removeObjekat = (id) => {
    const filter = this.state.objectsList.filter((object) => object.id !== id);
    this.setState({
      objectsList: filter,
    });
  };

  // functions for Pagination ==========================
  setPageNumber = () => {
    this.setState({
      numberOfPages: Math.ceil(
        this.state.filteredObjects.length / this.state.operationPerPage
      ),
    });
  };
  setPaginationPage = (page) => {
    this.setState({
      elemNum: [
        (page - 1) * (this.state.operationPerPage - 1),
        (page - 1) * (this.state.operationPerPage - 1) +
          this.state.operationPerPage -
          1,
      ],
      pageNum: page,
    });
    this.scrollTop.scrollIntoView({ behavior: "smooth" });
  };
  //====================== end =========================
  render() {
    return (
      <div className="objectsList">
        <div className="objectsList__search">
          <Marquee />
          {searchOption.map((option) => {
            return (
              <input
                key={option.id}
                id={option.id}
                type="text"
                placeholder={option.placeholder}
                onChange={this.updateSearch.bind(this)}
              />
            );
          })}
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
          <div className="objectsList__search-map">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlWxwplOXzrSL4iiZFCYl19MzootQg3js"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              places={this.state.loadOnPage}
              showOnMap={this.state.showOnMap}
              changeScreen={this.changeScreen}
            />
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="objectsList__objects">
            <div className={`selectedObject ${this.state.screen}`}>
              <Objekat
                classes="bigScreen"
                objekat={this.state.onBigScreen}
                setSmallObjects={this.setSmallObjects}
                showOnMap={this.showOnMap}
              />
            </div>
            <div className={`objectsList__objects-list ${this.state.screen}`}>
              <div
                ref={(el) => {
                  this.scrollTop = el;
                }}
              ></div>
              {this.state.loadOnPage.map((objekat) => {
                return (
                  <Objekat
                    key={objekat.id}
                    classes={this.state.screen.length === 0 ? "" : "small"}
                    objekat={objekat}
                    removeObjekat={this.removeObjekat}
                    changeScreen={this.changeScreen}
                    showOnMap={this.showOnMap}
                  />
                );
              })}
              <Pagination
                numberOfPages={this.state.numberOfPages}
                pageNum={this.state.pageNum}
                clicked={this.setPaginationPage}
              />
            </div>
          </div>
        </Suspense>
      </div>
    );
  }
  searchMethod() {
    let filteredObjects = this.state.objectsList
      .filter((objekat) => {
        return (
          objekat.city
            .toLowerCase()
            .substring(0, this.state.search1.length)
            .indexOf(this.state.search1.toLowerCase()) !== -1
        );
      })
      .filter((objekat) => {
        return (
          objekat.name
            .toLowerCase()
            .substring(0, this.state.search2.length)
            .indexOf(this.state.search2.toLowerCase()) !== -1
        );
      })
      .filter((objekat) => {
        return this.state.search3
          .flatMap((x) => Object.keys(x))
          .map((item) => {
            return objekat.facilities[item];
          })
          .every((x) => x);
      });
    const products = filteredObjects.slice(
      this.state.elemNum[0],
      this.state.elemNum[1]
    );
    this.setState({
      filteredObjects: filteredObjects,
      loadOnPage: products,
    });
  }
}
