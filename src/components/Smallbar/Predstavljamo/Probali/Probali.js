import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import pluto from "../../../Lender/lenderIMG/pluto.png";
import "./Probali.scss";

export class Probali extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 25 }}
      >
        {props => (
          <div style={props}>

            <div className="probalistyle">
              
                <img className="plutostyle" src={pluto}  alt="slika3" />
                <h1>Plutonium</h1>
                <h4>Dogma Brewery</h4>
                <br />
                <div className="probatextstyle">
                <p>
                  Plutonium Orange Milkshake Double IPA is a beer with a
                  radioactive name. But also it has radioactive taste! Brewed in
                  collab with our Russian friends (Brighton Brew) this tasty and
                  juicy beer is full of orange flavour, citrusy hops and
                  lactose. Smooth, silky and a little bit astrigent, Plutonium
                  will make your senses radioactive!
                </p>
              </div>
              </div>
            </div>
          
        )}
      </Spring>
    );
  }
}
// const c2Style = {
//   background: "grey",
//   color: "white",
//   padding: "1.5rem"
// };



export default Probali;
