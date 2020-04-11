import React from "react";
import "./Smallbar.scss";
import { NavLink } from "react-router-dom";

export default function Smallbar() {
  return <div className="smallBar">{options()}</div>;
}
const options = () => {
  return links.map((link, index) => {
    return (
      <NavLink to={link.path} key={index} className="smallBar__link">
        {link.title}
      </NavLink>
    );
  });
};
const links = [
  { path: "/festivali", title: "festivali 2019" },
  { path: "/postupak", title: "Postupak izrade" },
  { path: "/vrste", title: "Vrste piva" },
  { path: "/presdstavljamo", title: "Predstavljamo" },
];
