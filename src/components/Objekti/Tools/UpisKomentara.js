import React from "react";
import "./UpisKomentara.scss";

export default function UpisKomentara(props) {
  let commentsClasses = "comments";
  if (props.show) {
    commentsClasses = "comments open";
  }
  return (
    <div className={commentsClasses}>
      <div className="glavniDiv">
        <button>Dodaj komentar</button>
      </div>
    </div>
  );
}
