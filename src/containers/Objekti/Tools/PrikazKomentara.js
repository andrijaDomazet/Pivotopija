import React, { Component } from "react";
import "./PrikazKomentara.scss";

export default class PrikazKomentara extends Component {
  render() {
    let commentsClasses = "comments";
    if (this.props.show) {
      commentsClasses = "comments open";
    }
    const { name } = this.props.naziv;
    return (
      <div className={commentsClasses}>
        <div className="glavniDiv">
          <span className="close-btn" onClick={this.props.removeCommentBox}>
            <i className="fa fa-window-close" />
          </span>
          <div className="nazivObjekta">
            <h3>{name}</h3>
          </div>
          <div className="upisKomentara" />
        </div>
      </div>
    );
  }
}