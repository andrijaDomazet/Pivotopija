import React from "react";
import "./CloseButton";

export default function CloseButton(props) {
  return (
    <div class={props.classes} onClick={props.clicked}>
      <i className="fa fa-window-close" />
    </div>
  );
}
