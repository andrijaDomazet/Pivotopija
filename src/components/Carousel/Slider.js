import React from "react";
import { Spring } from "react-spring/renderprops";
import SH from "../../containers/Info/img/SH.jpg";
import "./Slider.scss";

export default function Slider() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props}>
          <img className="slika1" src={SH} alt="slika3" />
          <div className="sl1style">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, odit? Beatae illum temporibus mollitia. Numquam
              consequuntur sed, illum nisi fugit perferendis quo perspiciatis
              vero nostrum, recusandae reprehenderit minus. Laborum, nulla!
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}
