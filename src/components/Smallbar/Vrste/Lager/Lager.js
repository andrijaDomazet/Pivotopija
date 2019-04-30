import "./Lager.scss";
import React from "react";
import { Spring } from "react-spring/renderprops";
import Lagerimg from '../img/Lager.jpg';


export default function Lager() {
  return (
    
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className='lagerstyle'>
          
            <h1>Lager</h1>
            <img className='Lagerimg' src={Lagerimg}  alt="slika3" />
            <p className='paragLager'>
            Reč Lager je nemačkog porekla i u prevodu znači čuvati. 
            Ovo pivo ostavlja se posle pripreme da odležava na niskim 
            temperaturama bliskim nuli nekoliko meseci. 
            Razlikuje se od Ejla i po načinu pripreme, 
            jer je Lager pivo donje fermentacije, 
            što znači da se koriste kulture kvasca koje se talože na dnu 
            i tu vrše svoju fermentaciju pri niskim temperaturama - 
            hladno vrenje. Najpoznatiji su nemački, češki i holandski tipovi 
            Lagera.


            </p>
            
          </div>
        </div>
      )}
    </Spring>
  );
}
