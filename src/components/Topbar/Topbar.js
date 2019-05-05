import React from "react";
import "./Topbar.scss";
import { NavLink } from "react-router-dom";
import ToggleButton from "./SideDrawer/ToggleButton";
import SignIn from "./Login/SignIn";

export default function Topbar(props) {
  return (
    <header className="top-header">
      <nav className="topNavBar">
        <div className="toggle-button">
          <ToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="spacer" />
        <div className="navigation-items">
          <ul>
            <li>
              <SignIn />
            </li>
            <li>
              <NavLink to="/Register" className="top-link">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum" className="top-link">
                Forum
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontakt" className="top-link">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
    </header>
  );
}
