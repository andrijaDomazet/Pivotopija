import "./Stout.scss";
import React from "react";
import { Spring } from "react-spring/renderprops";
import Stoutimg from '../img/Stout.jpg';


export default function Stout() {
  return (
    
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className='stoutstyle'>          
            <h1>Stout </h1>
            <img className='Stoutimg' src={Stoutimg}  alt="slika3" />
            <p className='paragStout'>
            Izraz STOUT koristio se da označi snažnija piva, bez obzira na njihovu boju, 
            a vremenom je počeo da se koristi najviše uz jači porter, i tako je bilo kroz 
            čitav osamnaesti i početkom devetnaestog veka, pa je čak i veliki Ginis u jednom 
            novinskom oglasu iz 1836. godine svoje pivo nudio kao Double Brown Stout Porter. 
            Da je izraz stout bio prevashodno vezan za jačinu, a ne boju piva, 
            svedoče zapisi o proizvodnji jedne londonske pivare koja je proizvodila Pale Stout.
            </p>                       
            
          </div>
        </div>
      )}
    </Spring>
  );
}
