import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import SignIn from "./components/Topbar/Login/SignIn";
import SignUp from "./components/Topbar/Login/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Background from "../src/img/pozadina.jpg";
import ListaObjekata from "./components/Objekti/ListaObjekata";
import Mainscreen from "./components/Mainscreen/Mainscreen";
import Info from "./components/Info/Info";
import ListaPiva from "./components/Pivo/ListaPiva";
import SideDrawer from "./components/Topbar/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import NoMatch from "./components/Tools/NoMatch/NoMatch";
import Festivali from "./components/Smallbar/Festivali/Festivali.js";
import Vrste from "./components/Smallbar/Vrste/Vrste.js";
import Postupak from "./components/Smallbar/Postupak/Postupak.js";
import Predstavljamo from "./components/Smallbar/Predstavljamo/Predstavljamo.js";
// import Smallbar from "./components/Smallbar/Smallbar";
import Footer from "./components/Footer/Footer.js";
import "./App";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    var pozadina = {
      width: "100%",
      height: "100%",
      marginTop: "1rem",
      backgroundImage: `url(${Background})`
    };

    return (
      <Router style={{ height: "100%" }}>
        <Topbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <section style={pozadina}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Mainscreen} />
            <Route path="/info" component={Info} />
            <Route path="/piva" component={ListaPiva} />
            <Route path="/objekti" component={ListaObjekata} />
            <Route path="/vrste" component={Vrste} />
            <Route path="/festivali" component={Festivali} />
            <Route path="/postupak" component={Postupak} />
            <Route path="/predstavljamo" component={Predstavljamo} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={signUp} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </section>
      </Router>
    );
  }
}

export default App;
