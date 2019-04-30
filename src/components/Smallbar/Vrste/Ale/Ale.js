import React from "react";
import { Spring } from "react-spring/renderprops";
import IPA from '../img/IPA.jpeg';
import APA from '../img/APA.jpeg';
import "./Ale.scss";

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
            
            <img className='IPAimg' src={IPA}  alt="slika3" />
            <p className='parag1'>
            IPA (India Pale Ale) je zapravo stil piva pale ale koji se prvobitno razvio u Engleskoj. 
            U vreme dok je Indija bila britanska kolonija, velike količine ovog piva su brodovima 
            dopremane britanskim vojnicima na službi u Indiji. Kako bi sačuvali kvalitet i arome 
            piva tokom dugog puta, dosetili su se da dodaju velike količine hmelja, služio je kao konzervans, 
            pa je u ovim ejlovima bilo i više alkohola. Otuda u imenu ovog pale ale-a India. 
            Danas je IPA jedno od najčešćih i jedinstvenih stilova američkih kraft piva.             
            </p>
          <br />
          <br />
          <img className='APAimg' src={APA}  alt="slika3" />
            <p className='parag2'>
            APA (American Pale Ale) je najčešći stil piva u Americi. 
            Istorija nastanka APA-e nas opet vraća na Engleski Pale Ale. 
            Kao i za mnoga američka piva, engleska istorija pivarstva je i ovde ostavila trag. 
            Američko Pale Ale pivo je nastalo početkom 80-tih kada su manje pivare počele 
            da koriste američke sorte hmelja (Cascade ili Amarillo). 
            U odnosu na britanska Pale Ale piva Američiki Pale karakteriše jači ukus hmelja i aroma citrusa.  
            
            </p>
            
          </div>
        </div>
      )}
    </Spring>
  );
}
