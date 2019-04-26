import React from "react";
import { Spring } from "react-spring/renderprops";
import "./Festivali19.scss";
import Bf18 from './img/bf.jpeg';
import './Festivali19.scss';


export default function Festivali19 () {
  return (
    
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
        <div>
        <h1>Festivali u 2019</h1>
          <div className='fest19style'>              
            <br />            
            <div>
            <img src={Bf18} width="30%" alt="slika3" />
            <p>
            Organizatori festivala posebnu zahvalnost duguju službama grada Beograda bez čije 
            podrške ne bi bilo moguće realizovati festival ovog obima. 
            Svakog dana oko 100 radnika sa 15 vozila JKP "Gradska čistoća" i "Zelenilo Beograd" uklanjalo smeća, 
            a separacija otpada se radila na licu mesta, tako da je prikupljeno više od 3 i po tone limenki za reciklažu. 
            Na signalizaciji oko festivalskog prostora je bilo angažovano 20 radnika i 6 vozila, 
            a sve vreme trajanja festivala su dežurale i ekipe električara i javnog osvetljenja.
            </p>
            </div>
          </div>
        </div>
        </div>
      )}
    </Spring>
  );
}
