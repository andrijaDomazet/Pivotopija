import React, { Component } from "react";
import "./UpisKomentara.scss";

export default class UpisKomentara extends Component {
  state = {
    noviKomentar: [],
  };

  addKomentar() {
    var ime = this.refs.ime.value;
    var ocena = this.refs.ocena.value;
    console.log("Ime:", ime, "Komentar:", ocena);
    if (localStorage.getItem("noviKomentar") == null) {
      //---------------unos u lokal storidz
      var noviKomentar = [];
      noviKomentar.push(ime);
      noviKomentar.push("-" + ocena);
      localStorage.setItem("noviKomentar", JSON.stringify(noviKomentar));
    } else {
      //----------------dodaje nove vrednosti nakon unosa
      var noviKomentar = JSON.parse(localStorage.getItem("noviKomentar"));
      noviKomentar.push(ime);
      noviKomentar.push("-" + ocena);
      localStorage.setItem("noviKomentar", JSON.stringify(noviKomentar));
    }

    this.setState({
      noviKomentar: JSON.parse(localStorage.getItem("noviKomentar")),
    });
  }
  componentDidMount() {
    const noviKomentar = JSON.parse(localStorage.getItem("noviKomentar"));
    this.setState({ noviKomentar });
  }
  render() {
    const { name } = this.props.naziv;
    // if (!this.state.noviKomentar.length) {
    //   return <p>Nema komentara</p>;
    // }
    let commentsClasses = "upisKomentara";
    if (this.props.show) {
      commentsClasses = "upisKomentara open";
    }

    return (
      <div className={commentsClasses}>
        <div className="upisKomentara-glavniDiv">
          <div className="upisKomentara-nazivObjekta">
            <h3>{name}</h3>
          </div>
          <div className="upisKomentara-komentari">
            {/* <ul>
              {this.state.noviKomentar.map(function(noviKomentar, index) {
                return (
                  <li className="upisKomentara-lista" key={index}>
                    {noviKomentar}
                  </li>
                );
              }, this)}
            </ul> */}
          </div>
          <div className="upisKomentara-upis">
            <div className="upisImena">
              <input type="text" placeholder="Korisničko ime..." ref="ime" />
            </div>
            <div className="upisKomentara-input">
              <input
                type="text"
                placeholder="Upišite Vaš komentar..."
                ref="ocena"
              />
            </div>

            <input
              className="potvrda"
              type="button"
              value="Dodajte komentar"
              onClick={() => {
                this.props.brojacKomentara();
                // this.props.removeCommentBox();
                this.addKomentar();
              }}
            />
          </div>
          <span className="close-btn" onClick={this.props.removeCommentBox}>
            <i className="fa fa-window-close" />
          </span>
        </div>
      </div>
    );
  }
}
