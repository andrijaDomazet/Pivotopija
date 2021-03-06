import React, { Component } from "react";
import "./KomentForma.scss";

export default class KomentForma extends Component {
  state = {
    upis: []
  };

  add() {
    var ime = this.refs.ime.value;
    var ocena = this.refs.ocena.value;
    console.log("Ime:" + ime + "Komentar:" + ocena);
    if (localStorage.getItem("upis") == null) {
      //---------------unos u lokal storidz
      var upis = [];
      upis.push(ime);
      upis.push("-" + ocena);
      localStorage.setItem("upis", JSON.stringify(upis));
    } else {
      //----------------dodaje nove vrednosti nakon unosa
      var upisU = JSON.parse(localStorage.getItem("upis"));
      upis.push(ime);
      upis.push("-" + ocena);
      localStorage.setItem("upis", JSON.stringify(upisU));
    }

    this.setState({
      upis: JSON.parse(localStorage.getItem("upis"))
    });
  }
  // componentDidMount = () => {
  //   const upis = JSON.parse(localStorage.getItem("upis"));
  //   this.setState({ upis });
  // };
  render() {
    // if (!this.state.upis) {
    //   return <p>Nema komentara</p>;
    // }
    return (
      <div className="formastyle">
        <div className="unosstyle">
          <h5>Vaš komentar:</h5>
          <input type="text" placeholder="Ime:" ref="ime" />
          <br /> <br />
          <input type="textfield" placeholder="Vaša ocena:" ref="ocena" />
          <br /> <br />
          <input
            type="button"
            value="Dodajte komentar"
            onClick={this.add.bind(this)}
          />
        </div>
        <ul>
          {this.state.upis.map(function(upis, index) {
            return (
              <li className="komentlista" key={index}>
                {upis}
              </li>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
