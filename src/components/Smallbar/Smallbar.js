import React from "react";
import "./Smallbar.scss";
import { NavLink } from "react-router-dom";

export default function Smallbar() {
  return (
    <nav className="smallBar">
      <div className="smallBar-links">
        <ul className='smolBar'>
          <li>
            <NavLink to="/festivali" className="smallBar-link">
              festivali 2019
            </NavLink>
          </li>          
          <li>
            <NavLink to="/postupak" className="smallBar-link">
              postupak izrade
            </NavLink>
          </li>
          <li>
            <NavLink to="/vrste" className="smallBar-link">
              vrste piva
            </NavLink>
          </li>
          <li>
            <NavLink to="/predstavljamo" className="smallBar-link">
              predstavljamo
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="spacer" />
    </nav>
  );
}
