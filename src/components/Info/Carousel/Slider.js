import "./Slider.scss";
import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Slider() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Otvara se nova pivnica</h1>
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

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

