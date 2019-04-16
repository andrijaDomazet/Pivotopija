import React from "react";
import "./Backdrop.scss";

export default function Backdrop(props) {
  return <div className="backdrop" onClick={props.click} />;
}
