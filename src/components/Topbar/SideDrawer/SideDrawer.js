import React from "react";
import "./SideDrawer.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../../img/LogoLNK.svg";

export default function SideDrawer(props) {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div>
      <nav className={drawerClasses}>
        <div className="logo">
          <img src={Logo} alt="pivo" width="20%" />
        </div>
        <span className="naziv">Pivotopija</span>
        <ul>{options(props)}</ul>
      </nav>
    </div>
  );
}
const options = props => {
  return links.map((link, index) => {
    return (
      <li>
        <NavLink
          exact
          key={index}
          to={link.path}
          className="top-link2"
          onClick={props.removeCommentBox}
        >
          {link.title}
        </NavLink>
      </li>
    );
  });
};
const links = [
  { path: "/", title: "Home" },
  { path: "/info", title: "Info" },
  { path: "/piva", title: "Piva" },
  { path: "/objekti", title: "Objekti" },
  { path: "/login", title: "Login" },
  { path: "/forum", title: "Forum" },
  { path: "/kontakt", title: "Kontakt" }
];
