import React from "react";
import { Spring } from "react-spring/renderprops";
import Porterimg from '../img/Porter.jpg';
import "./Porter.scss";

export default function Porter() {
  return (
    
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className='portstyle'>          
            <h1>Porter</h1>
            
            <img className='Porterimg' src={Porterimg}  alt="slika3" />
            
            
            <p className='paragPorter'>
            Porter piva mogu biti podeljena u dve klase, po nazivu „braon stout“ i „porter“. Brown 
            stout je verzija regularnog porter-a, samo sa punijim telom, i uglavnom se izvozi za Ameriku i 
            Zapadnu Indiju. Patent slad je nastao 1817. godine, kao zamena za skupe braon, kristal sladove. Ovo je
            učinilo da se porter piva mogu praviti po nižim cenama, s obzirom da se za njihovu proizvodnju
            može koristiti većinski pale ale slad koji daje dobar ekstrakt (više alkohola), i mali udeo patent
            slada, u odnosnu na prethodnu kombinaciju kristal i svetlih sladova. Dobar primer za ovu
            praksu nalazimo kod Guinness piva.
            sladova.
            </p>
            </div>
           </div> 
          
      )}
    </Spring>
  );
}

  
 
