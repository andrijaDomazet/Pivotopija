import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Background from "../src/img/pozadina.jpg";
import ListaObjekata from "./components/Objekti/ListaObjekata";
import Mainscreen from "./components/Mainscreen/Mainscreen";
import Info from "./components/Info/Info";
import ListaPiva from "./components/Pivo/ListaPiva";
import NoMatch from "./components/Tools/NoMatch/NoMatch";
import Festivali from "./components/Smallbar/Festivali/Festivali.js";
import Vrste from "./components/Smallbar/Vrste/Vrste.js";
import Postupak from "./components/Smallbar/Postupak/Postupak.js";
import Predstavljamo from "./components/Smallbar/Predstavljamo/Predstavljamo.js";
import Footer from "./components/Footer/Footer.js";
import Kontakt from "./components/Topbar/Kontakt/Kontakt.js";
import "./App";

class App extends Component {
  render() {
    var pozadina = {
      width: "100%",
      height: "100%",
      marginTop: "1rem",
      backgroundImage: `url(${Background})`
    };

    return (
      <Router style={{ height: "100%" }}>
        <Topbar />
        <section style={pozadina}>
          <Navbar />
          <Switch>
            <Route exact path="/Pivotopija" render={() => <Redirect to="/" />} />
            <Route path="/" exact component={Mainscreen} />
            <Route path="/info" component={Info} />
            <Route path="/piva" component={ListaPiva} />
            <Route path="/objekti" component={ListaObjekata} />
            <Route path="/vrste" component={Vrste} />
            <Route path="/festivali" component={Festivali} />
            <Route path="/postupak" component={Postupak} />
            <Route path="/predstavljamo" component={Predstavljamo} />
            <Route path="/Kontakt" component={Kontakt} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </section>
      </Router>
    );
  }
}

export default App;
