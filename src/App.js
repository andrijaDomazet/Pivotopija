import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mainscreen from "./containers/Mainscreen/Mainscreen";
import Info from "./containers/Info/Info";
// import NoMatch from "./components/Tools/NoMatch/NoMatch";
import Festivals from "./containers/Festivals/Festivals.js";
import Vrste from "./components/Bars/Smallbar/Vrste/Vrste.js";
import Postupak from "./components/Bars/Smallbar/Postupak/Postupak.js";
import Predstavljamo from "./components/Bars/Smallbar/Predstavljamo/Predstavljamo.js";
import Kontakt from "./components/Bars/Topbar/Kontakt/Kontakt.js";
import "./App.scss";
import ObjectsList from "./containers/Objects/ObjectsList";
import BeersList from "./containers/Beers/BeersList";
import Bars from "./components/Bars/Bars";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Bars />
          <Switch>
            <Route exact path="https://andrijadomazet.github.io/Pivotopija/" />
            <Route path="/" exact component={Mainscreen} />
            <Route path="/info" component={Info} />
            <Route path="/piva" component={BeersList} />
            <Route path="/objekti" component={ObjectsList} />
            <Route path="/vrste" component={Vrste} />
            <Route path="/festivali" component={Festivals} />
            <Route path="/postupak" component={Postupak} />
            <Route path="/predstavljamo" component={Predstavljamo} />
            <Route path="/Kontakt" component={Kontakt} />
            {/* Za potrebe deploy-a je ubacen Mainscreen umesto NoMatch */}
            <Route component={Mainscreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}
