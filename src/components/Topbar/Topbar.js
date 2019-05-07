import React from "react";
import "./Topbar.scss";
import { NavLink } from "react-router-dom";
import SignIn from "./Login/SignIn";
import Register from "./Login/Register";

export default function Topbar(props) {
  return (
    <header className="top-header">
      <nav className="topNavBar">
        <div className="spacer" />
        <div className="navigation-items">
          <ul>
            <li>
              <SignIn />
            </li>
            <li>
              <Register />
            </li>
            <li>
              <NavLink to="/kontakt" className="top-link">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
