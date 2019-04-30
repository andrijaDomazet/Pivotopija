import React from "react";
import "./ToggleComments.scss";

export default function ToggleComments(props) {
  return (
    <div>
      <button className="toggleComments" onClick={props.click}>
        <i className="far fa-comments" />
      </button>
    </div>
  );
}
