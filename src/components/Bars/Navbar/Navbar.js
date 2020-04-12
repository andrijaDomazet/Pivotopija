import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../../../src/img/LogoLNK.svg";
import ToggleButton from "../SideDrawer/ToggleButton";
import Backdrop from "../../Backdrop/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";

export default class Navbar extends Component {
  state = {
    sideDrawerOpen: false,
  };
  removeCommentBox = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
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
        <img src={Logo} alt="page__logo" />
        <NavLink to="/" exact className="nav__link">
          <span className="naziv">Pivotopija </span>
        </NavLink>

        <div className="toggle-button">
          <ToggleButton click={this.drawerToggleClickHandler} />
        </div>
        <div className="nav-links">
          {options.map((option, index) => {
            return (
              <NavLink
                key={index}
                to={option.route}
                exact
                className="nav__link"
              >
                {option.title}
              </NavLink>
            );
          })}
        </div>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          removeCommentBox={this.removeCommentBox}
        />
        {backdrop}
      </nav>
    );
  }
}
const options = [
  { title: "Home", route: "/" },
  { title: "Info", route: "/info" },
  { title: "Piva", route: "/piva" },
  { title: "Objekti", route: "/objekti" },
];
