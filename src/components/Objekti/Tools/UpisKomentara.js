import React, { Component } from "react";
import "./UpisKomentara.scss";

export default class UpisKomentara extends Component {
  state = {
    komentari: []
  };

  addKomentar = () => {
    var komentar = this.refs.komen.value;
    if (localStorage.getItem("komentari") == null) {
      var komentari = [];
      komentari.push(komentar);
      localStorage.setItem("komentar", JSON.stringify(komentari));
    } else {
      var komentari = JSON.parse(localStorage.getItem("komentari"));
      komentari.push(komentar);
      localStorage.setItem("komentar", JSON.stringify(komentari));
    }
    this.setState({
      komentari: JSON.parse(localStorage.getItem("komentari"))
    });
  };

  render() {
    let commentsClasses = "comments";
    if (this.props.show) {
      commentsClasses = "comments open";
    }

    return (
      <div className={commentsClasses}>
        <div className="glavniDiv">
          <span className="close-btn" onClick={this.props.removeCommentBox}>
            <i className="fa fa-window-close" />
          </span>
          <div className="upisImena">
            <input type="text" ref="komen" placeholder="Korisničko ime..." />
          </div>
          <div className="upisKomentara">
            <input
              type="text"
              ref="komen"
              placeholder="Upišite Vaš komentar..."
            />
          </div>

          <button
            onClick={() => {
              this.props.brojacKomentara();
              this.props.removeCommentBox();
              this.addKomentar();
            }}
          >
            Dodaj komentar
          </button>
        </div>
      </div>
    );
  }
}
