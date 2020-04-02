import React from "react";
import "./Topbar.scss";
import { NavLink } from "react-router-dom";
import SignIn from "./Login/SignIn";
import Register from "./Login/Register";

export default function Topbar(props) {
  return (
    <header className="topbar-header">
      <nav className="topbar-nav">
        <div className="topbar-spacer" />
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
