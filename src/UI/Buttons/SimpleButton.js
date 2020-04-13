import React from "react";
import "./SimpleButton.scss";

export default function SimpleButton(props) {
  return (
    <button className={props.classes} onClick={props.clicked}>
      {props.children}
    </button>
  );
}
