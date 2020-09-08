import React from "react";
import "./SocialButtons.scss";

export default function SocialButtons(props) {
  return (
    <div className={`socialButtons ${props.classes}`}>
      <div className="svidjanja">
        <p>
          Sviđanja:
          {/* {this.state.brojSvidjanja} */}
        </p>
        <button
          className="like"
          // onClick={this.brojacSvidjanja}
        >
          <i className="far fa-thumbs-up" />
        </button>
      </div>
      <div className="komentarisanje">
        <p
        // onClick={this.okidacUpisaKomentara}
        >
          Komentara:
          {/* {this.state.brojKomentara} */}
        </p>
        {/* <ToggleComments click={this.okidacUpisaKomentara} />
        <UpisKomentara
          naziv={this.props.podaci}
          brojacKomentara={this.brojacKomentara}
          removeCommentBox={this.removeCommentBox}
          show={this.state.upisKomentaraOpen}
        />
        {backdrop}
        <PrikazKomentara
          naziv={this.props.podaci}
          removeCommentBox={this.removeCommentBox}
          show={this.state.prikazKomentaraOpen}
        /> */}
      </div>
    </div>
  );
}
