import React from "react";
import Topbar from "./Topbar/Topbar";
import Navbar from "./Navbar/Navbar";
import "./Bars.scss";

export default function Bars() {
  return (
    <div className="bars">
      <Topbar />
      <Navbar />
    </div>
  );
}
