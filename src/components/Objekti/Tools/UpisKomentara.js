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
        <span className="close-btn" onClick={props.removeCommentBox}>
          <i className="fa fa-window-close" />
        </span>
        <div className="upisImena">
          <input type="text" placeholder="Korisničko ime..." />
        </div>
        <div className="upisKomentara">
          <input type="text" placeholder="Upišite Vaš komentar..." />
        </div>

        <button
          onClick={() => {
            props.brojacKomentara();
            props.removeCommentBox();
          }}
        >
          Dodaj komentar
        </button>
      </div>
    </div>
  );
}
