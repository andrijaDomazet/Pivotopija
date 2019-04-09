import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Background from "../src/img/pozadina.jpg";
import ListaObjekata from "./components/Objekat/ListaObjekata";
import Mainscreen from "./components/Mainscreen/Mainscreen";
import Info from "./components/Info/Info";
import ListaPiva from "./components/Pivo/ListaPiva";
// import "./index.scss";
class App extends Component {
  render() {
    var pozadina = {
      width: "100%",
      height: "95vh",
      backgroundImage: `url(${Background})`
    };
    return (
      <Router>
        <Topbar />
        <section style={pozadina}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Mainscreen} />
            <Route path="/info" component={Info} />
            <Route path="/piva" component={ListaPiva} />
            <Route path="/objekti" component={ListaObjekata} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
