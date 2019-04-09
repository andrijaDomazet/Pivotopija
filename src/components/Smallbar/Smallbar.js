import React from "react";
import "./Smallbar.scss";
import { NavLink } from "react-router-dom";

export default function Smallbar() {
  return (
    <nav className="smallbar">
      <h1>o pivima</h1>
      <ul className="smallbar-links">
        <li>
          <NavLink to="/istorijat" className="smallbar-link">
            istorijat piva
          </NavLink>
        </li>
        <li>
          <NavLink to="/izrada" className="smallbar-link">
            postupak izrade
          </NavLink>
        </li>
        <li>
          <NavLink to="/zanimljivosti" className="smallbar-link">
            zanimljivosti
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
