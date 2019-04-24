import "./Ale.scss";
import React from "react";
import { Spring } from "react-spring/renderprops";


export default function Ale() {
  return (
    
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className='alestyle'>
         
            <h1>Ale</h1>
            <p>
            is a type of beer brewed using a warm fermentation method, 
            resulting in a sweet, full-bodied and fruity taste.
            Historically, the term referred to a drink brewed without hops.
            As with most beers, ale typically has a bittering agent to balance the malt and act as a preservative. 
            Ale was originally bittered with gruit, a mixture of herbs or spices boiled in the wort before fermentation. 
            Later, hops replaced gruit as the bittering agent.
            </p>
            
          </div>
        </div>
      )}
    </Spring>
  );
}



