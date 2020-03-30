import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import ListaObjekata from "./containers/Objekti/ListaObjekata";
import Mainscreen from "./containers/Mainscreen/Mainscreen";
import Info from "./components/Info/Info";
import ListaPiva from "./containers/Pivo/ListaPiva";
// import NoMatch from "./components/Tools/NoMatch/NoMatch";
import Festivali from "./components/Smallbar/Festivali/Festivali.js";
import Vrste from "./components/Smallbar/Vrste/Vrste.js";
import Postupak from "./components/Smallbar/Postupak/Postupak.js";
import Predstavljamo from "./components/Smallbar/Predstavljamo/Predstavljamo.js";
import Footer from "./components/Footer/Footer.js";
import Kontakt from "./components/Topbar/Kontakt/Kontakt.js";
import "./App.scss";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Topbar />
          <Navbar />
          <Switch>
            <Route exact path="https://andrijadomazet.github.io/Pivotopija/" />
            <Route path="/" exact component={Mainscreen} />
            <Route path="/info" component={Info} />
            <Route path="/piva" component={ListaPiva} />
            <Route path="/objekti" component={ListaObjekata} />
            <Route path="/vrste" component={Vrste} />
            <Route path="/festivali" component={Festivali} />
            <Route path="/postupak" component={Postupak} />
            <Route path="/predstavljamo" component={Predstavljamo} />
            <Route path="/Kontakt" component={Kontakt} />
            {/* Za potrebe deploy-a je ubacen Mainscreen umesto NoMatch */}
            <Route component={Mainscreen} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}
