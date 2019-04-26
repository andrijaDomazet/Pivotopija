import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import pluto from '../../../Lender/lenderIMG/pluto.png'


export class Slider2 extends Component {
  render() {
    return (
      <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div style={props}>
            <div className='probalistyle'>
              <h1>Plutonium</h1>
              <img src={pluto} width="12%" alt="slika3" />
              <h4>Dogma Brewery</h4>
              <br/>
              <p>
              Plutonium Orange Milkshake Double IPA is a beer with a radioactive name. 
              But also it has radioactive taste! Brewed in collab with our Russian friends 
              (Brighton Brew) this tasty and juicy beer is full of orange flavour, citrusy hops and lactose. 
              sSmooth, silky and a little bit astrigent, Plutonium will make your senses radioactive! 
              </p>
              
              <button style={btn} onClick={this.props.toggle1}>
                Vasa ocena
              </button>
            </div>
          </div>
        )}
        
      </Spring>
    );
  }
}
const c2Style = {
  background: "grey",
  color: "white",
  padding: "1.5rem"
};
const btn = {
  background: "green",
  color: "white",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "upercase",
  margin: "15px 0"
};
export default Slider2;