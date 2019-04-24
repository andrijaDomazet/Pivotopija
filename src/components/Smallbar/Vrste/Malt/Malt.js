import "./Malt.scss";
import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Malt() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className='maltstyle'>
            <h1>Malt</h1>
            <p>
            a sweet, low-alcohol beer (0–2.5% ABV) 
            that is brewed like regular beer but with low or minimal fermentation. 
            To keep the alcohol content low, one of two methods may be used: 
            either the yeast is added at about 0 °C (resulting in an alcohol content of under 0.5% ABV) 
            or fermentation is halted at the desired alcohol content (usually in the range of 1 to 2% ABV). 
            It is made from barley malt syrup, sugar, yeast, hops, and water.
            Malt beer is considered to be nutritious and is sometimes given to nursing mothers.
             Among the ancient Egyptians, their form of malt beer (zythum) was considered to work as both a laxative and antidiarrheal; 
             it was considered dangerous, however, for the sick or pregnant to drink it.
            </p>
            
          </div>
        </div>
      )}
    </Spring>
  );
}