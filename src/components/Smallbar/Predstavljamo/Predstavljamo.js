import React, { Component } from "react";
import pluto from '../../Lender/lenderIMG/pluto.png'
import Komentari from './Komentari/Komentari.js'
import Smallbar from "../Smallbar";
import "./Predstavljamo.scss";

export default class Predstavljamo extends Component {
  render() {
    return (
      <div className='glavnbiox'>
      <Smallbar />
        <div className="predstyle">
        <div className="probalistyle">
              
              <img className="plutoimg" src={pluto}  alt="slika3" />
              <div className="probatextstyle">                       
              
              <div className="textstyle">
              <h2>Plutonium</h2>
              <h5>Dogma Brewery</h5>
                  <p>Plutonium Orange Milkshake Double IPA is a beer with a
                  radioactive name. But also it has radioactive taste! Brewed in
                  collab with our Russian friends (Brighton Brew) this tasty and
                  juicy beer is full of orange flavour, citrusy hops and
                  lactose. Smooth, silky and a little bit astrigent, Plutonium
                  will make your senses radioactive!
                  </p>
              </div>
            </div>
        </div>         
        </div>
        
         
         <Komentari />
      </div>
    );
  }
}
