import React from "react";
import "./Topbar.scss";
import NavLinksTopBar from "./NavLinksTopBar";
import { NavLink } from "react-router-dom";

export default function Topbar() {
  return (
    <header className="top-header">
      <nav className="top-nav">
        <div className="spacer" />
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="navigation-items">
          <ul>
            <li>
              <NavLink to="/login" className="top-link">
                Login
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
      </nav>
    </header>
  );
}
