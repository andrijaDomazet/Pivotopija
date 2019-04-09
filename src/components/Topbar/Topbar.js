import React from "react";
import "./Topbar.scss";
import { NavLink } from "react-router-dom";

export default function Topbar() {
  return (
    <nav className="topbar">
      <ul className="top-links">
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
        <input type="text" placeholder="Search..." />
      </ul>
    </nav>
  );
}
