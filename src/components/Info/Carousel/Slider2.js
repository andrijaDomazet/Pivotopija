import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import CB from '../img/CB.png'
import './Slider2.scss';

export class Slider2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
          <img className='slika2' src={CB}  alt="slika3" />
            <div className='sl2style'>              
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
