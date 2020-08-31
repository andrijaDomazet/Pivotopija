import React from "react";
import "./Smallbar.scss";
import { NavLink } from "react-router-dom";
import { links } from "../../../shared/shared";

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
