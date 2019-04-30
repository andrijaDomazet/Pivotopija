import React from "react";
import "./Navbar.scss";
import Logo from "../../../src/img/LogoLNK.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navBar">
      <img src={Logo} alt="" width="50px" height="50px" />
      <span className="naziv">Pivotopija</span>
      <div className="nav-links">
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
        </ul>
      </div>
      <div className="spacer" />
    </nav>
  );
}
// import React, { Component } from "react";

// export default class Navbar extends Component {
//   state = {
//     nazivi: ["Home", "Info", "Piva", "Objekti"]
//   };
//   render() {
//     return (
//       <nav className="navBar">
//         <div className="spacer" />
//         <img src={logo} alt="" width="50px" height="50px" />
//         <span className="naziv">Pivotopija</span>
//         <div className="nav-links">
//           <ul>
//             {this.state.nazivi.map(naziv => (
//               <li>{naziv}</li>
//             ))}
//             {/* <li>
//               <NavLink to="/" exact className="nav-link">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/info" className="nav-link">
//                 info
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/piva" className="nav-link">
//                 Piva
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/objekti" className="nav-link">
//                 Objekti
//               </NavLink>
//             </li> */}
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// }
