import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import pluto from "../../../Lender/lenderIMG/pluto.png";
import Komentform from './Komentform/Komentform.js'
import "./Probali.scss";

export default class Probali extends Component {

  state = {
    ime:'',
    komentar:'',
  };

onSubmit = fields => {
  console.log('Probali kaze:', fields);
  this.setState({ fields });
  };


  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 25 }}
      >
        {props => (
          <div style={props}>

            <div className="probalistyle">
              
                <img className="plutoimg" src={pluto}  alt="slika3" />
                <div className="probatextstyle">
                <h1>Plutonium</h1>
                <h4>Dogma Brewery</h4>              
                
                <p className="textstyle">
                    Plutonium Orange Milkshake Double IPA is a beer with a
                    radioactive name. But also it has radioactive taste! Brewed in
                    collab with our Russian friends (Brighton Brew) this tasty and
                    juicy beer is full of orange flavour, citrusy hops and
                    lactose. Smooth, silky and a little bit astrigent, Plutonium
                    will make your senses radioactive!
                </p>
              </div>
              </div>

            <div className='komentstyle'>
              <Komentform onSubmit = {fields => this.onSubmit(fields)} />
                <div className = 'textform'>
                  <p className = 'ispistyle' >
                  {JSON.stringify(this.state.fields, null, 2)}
                  </p>
                </div>
            </div>


            </div>
            
          
        )}
      </Spring>
    );
  }
}



