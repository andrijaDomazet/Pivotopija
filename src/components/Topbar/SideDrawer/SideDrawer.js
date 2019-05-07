import React from "react";
import "./SideDrawer.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../../img/LogoLNK.svg";

export default function SideDrawer(props) {
  // console.log("idemooo");

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div>
      <nav className={drawerClasses}>
        <div className="logo">
          <img src={Logo} alt="pivo" width="30%" />
        </div>
        <span className="naziv">Pivotopija</span>
        <ul>
          <li>
            <NavLink to="/" exact className="top-link2">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/info" className="top-link2">
              info
            </NavLink>
          </li>
          <li>
            <NavLink to="/piva" className="top-link2">
              Piva
            </NavLink>
          </li>
          <li>
            <NavLink to="/objekti" className="top-link2">
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
