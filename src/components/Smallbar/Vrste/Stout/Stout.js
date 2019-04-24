import "./Stout.scss";
import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Stout() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className='stoutstyle'>
            <h1>Stout</h1>
            <p>
            is a type of beer conditioned at low temperatures.
            Lagers can be pale, amber, or dark. Pale lager is the most widely consumed and commercially available style of beer. 
            Well-known brands include Pilsner Urquell, Molson Canadian, Miller, 
            Stella Artois, Beck's, Brahma, Budweiser Budvar, Corona, Snow, Tsingtao,
             Singha, Kirin, Heineken, Carling, Foster's, Carlsberg, 
             Birra Moretti and Tennents.
            </p>
            
          </div>
        </div>
      )}
    </Spring>
  );
}