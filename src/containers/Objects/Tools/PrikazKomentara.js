import React, { Component } from "react";
import "./PrikazKomentara.scss";

export default class PrikazKomentara extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       text: "Initial State"
  //     };
  //     updateText = updateText.bind(this);
  //   }

  render() {
    let commentsClasses = "comments";
    if (this.props.show) {
      commentsClasses = "comments open";
    }
    const { name } = this.props.naziv;
    // const { komentari } = this.props.komentari;
    // console.log(name);
    // const { noviKomentar } = this.props.noviKomentar;
    return (
      <div className={commentsClasses}>
        <div className="glavniDiv">
          <span className="close-btn" onClick={this.props.removeCommentBox}>
            <i className="fa fa-window-close" />
          </span>
          <div className="nazivObjekta">
            <h3>{name}</h3>
          </div>
          <div className="upisKomentara">
            {/* <ul>
              {this.state.noviKomentar.map(function(noviKomentar, index) {
                return (
                  <li className="komentlista" key={index}>
                    {noviKomentar}
                  </li>
                );
              }, this)}
            </ul> */}
            {/* <p>PrikazKomentara:{this.props.noviKomentar}</p> */}
          </div>
        </div>
      </div>
    );
  }
}
