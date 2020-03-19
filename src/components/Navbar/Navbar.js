import React, { Component } from "react";
import "./Navbar.scss";
import Logo from "../../../src/img/LogoLNK.svg";
import { NavLink } from "react-router-dom";
import ToggleButton from "../Topbar/SideDrawer/ToggleButton";
import Backdrop from "../Backdrop/Backdrop";
import SideDrawer from "../Topbar/SideDrawer/SideDrawer";

export default class Navbar extends Component {
  state = {
    sideDrawerOpen: false
  };
  removeCommentBox = () => {
    this.setState({
      sideDrawerOpen: false
    });
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

    return (
      <nav className="navBar">
        <img src={Logo} alt="" width="50px" height="50px" />
        <NavLink to="/" exact className="nav-link">
          <span className="naziv">Pivotopija </span>
        </NavLink>

        <div className="nav-spacer1" />
        <div className="toggle-button">
          <ToggleButton click={this.drawerToggleClickHandler} />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/" exact className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/info" className="nav-link">
                info
              </NavLink>
            </li>
            <li>
              <NavLink to="/piva" className="nav-link">
                Piva
              </NavLink>
            </li>
            <li>
              <NavLink to="/objekti" className="nav-link">
                Objekti
              </NavLink>
            </li>
          </ul>
        </div>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          removeCommentBox={this.removeCommentBox}
        />
        {backdrop}
        <div className="nav-spacer2" />
      </nav>
    );
  }
}
