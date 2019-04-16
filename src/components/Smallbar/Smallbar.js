import React from "react";
import "./Smallbar.scss";
import { NavLink } from "react-router-dom";

export default function Smallbar() {
  return (
    <nav className="smallBar">
      <div className="spacer" />
      <div className="naslov_sb">
        <h1>o pivima</h1>
      </div>
      <div className="smallBar-links">
        <ul>
          <li>
            <NavLink to="/istorijat" className="smallBar-link">
              istorijat piva
            </NavLink>
          </li>
          <li>
            <NavLink to="/izrada" className="smallBar-link">
              postupak izrade
            </NavLink>
          </li>
          <li>
            <NavLink to="/zanimljivosti" className="smallBar-link">
              zanimljivosti
            </NavLink>
          </li>
        </ul>
      </div>{" "}
      <div className="spacer" />
    </nav>
  );
}
