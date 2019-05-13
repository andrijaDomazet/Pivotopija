import React from "react";
import "./Smallbar.scss";
import { NavLink } from "react-router-dom";

export default function Smallbar() {
  return (
    <nav className="smallBar">
      <div className="smallBar-links">
        <ul>
          <li>
            <NavLink to="/festivali" className="smallBar-link0">
              festivali 2019
            </NavLink>
          </li>
          <li>
            <NavLink to="/postupak" className="smallBar-link">
              Postupak izrade
            </NavLink>
          </li>
          <li>
            <NavLink to="/vrste" className="smallBar-link">
              Vrste piva
            </NavLink>
          </li>
          <li>
            <NavLink to="/predstavljamo" className="smallBar-link">
              Predstavljamo
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="spacer" />
    </nav>
  );
}
