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
          
            <h1>Stout i Porter</h1>
            <p>
            Izraz STOUT koristio se da označi snažnija piva, bez obzira na njihovu boju, 
            a vremenom je počeo da se koristi najviše uz jači porter, i tako je bilo kroz 
            čitav osamnaesti i početkom devetnaestog veka, pa je čak i veliki Ginis u jednom 
            novinskom oglasu iz 1836. godine svoje pivo nudio kao Double Brown Stout Porter. 
            A da je izraz stout bio prevashodno vezan za jačinu, a ne boju piva, 
            svedoče zapisi o proizvodnji jedne londonske pivare koja je proizvodila Pale Stout, 
            tako da neki novi današnji stilovi, kao white stout, zapravo uopšte i nisu tako novi.
            </p>
            <br />
            <p>
            PORTER je stil piva koji je nastao u 18. veku u Engleskoj, 
            Londonu, gde je bio najpopularniji među radnicima na rečnim dokovima, 
            odakle potiče i naziv ovog piva. Proizvodio se tako što se u braon blagi ale dodaje veća količina hmelja. 
            Na taj način se povećava trajnost. Proces zrenja se odvija u velikim kontejnerima 
            čime se povećava količina alkohola. Ovakvo zrelo pivo se na kraju meša sa mladim 
            pivom i na taj način se dobija konačna aroma Portera. Boja Portera varira od tamne 
            braon do crne i jako je zahmeljeno pivo. Gorčina može da ide od blage pa do gorke.  
            </p>
            
          </div>
        </div>
      )}
    </Spring>
  );
}
