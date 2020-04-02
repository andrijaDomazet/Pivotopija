import React from "react";
import "./Smallbar.scss";
import { NavLink } from "react-router-dom";

export default function Smallbar() {
  return (
    <nav className="smallBar">
      <div className="smallBar-links">
        <ul>{options()}</ul>
      </div>
      <div className="spacer" />
    </nav>
  );
}
const options = () => {
  return links.map((link, index) => {
    return (
      <li>
        <NavLink to={link.path} key={index} className="smallBar-link">
          {link.title}
        </NavLink>
      </li>
    );
  });
};
const links = [
  { path: "/festivali", title: "festivali 2019" },
  { path: "/postupak", title: "Postupak izrade" },
  { path: "/vrste", title: "Vrste piva" },
  { path: "/presdstavljamo", title: "Predstavljamo" }
];
