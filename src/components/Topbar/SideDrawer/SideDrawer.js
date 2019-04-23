import React from "react";
import "./SideDrawer.scss";
import { NavLink } from "react-router-dom";

export default function SideDrawer(props) {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div>
      <nav className={drawerClasses}>
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
          <li>
            <NavLink to="/login" className="top-link2">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/forum" className="top-link2">
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className="top-link2">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
