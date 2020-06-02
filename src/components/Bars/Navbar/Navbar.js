import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ToggleButton from "../SideDrawer/ToggleButton";
import Backdrop from "../../Backdrop/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";
import { routeOptions } from "../../../shared/shared";

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
      <div className="navBar">
        <div className="toggle-button">
          <ToggleButton click={this.drawerToggleClickHandler} />
        </div>
        <div className="nav-links">
          {routeOptions.map((option, index) => {
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
      </div>
    );
  }
}
