import React from "react";
import "./Navbar.scss";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="" width="50px" />
      <span className="naziv">Pivotopija</span>
      <ul className="nav-links">
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
    </nav>
  );
}
