import React from "react";
import { Spring } from "react-spring/renderprops";
import "./Festivali19.scss";
import Bf18 from './img/bf.jpeg';
import Dani from './img/dani.jpg';
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
        <div className='naslov'>
        <h1>FESTIVALI U 2019</h1>
        </div>
                     
            <br />  
            <br />          
            <div className='lista'>
                <div className='paragraf1'>
                    <h2>Beogradski festival piva</h2>
                    <img className='imgfest1' src={Bf18}  alt="slika3" />
                    <p >
                    Organizatori festivala posebnu zahvalnost duguju službama grada Beograda bez čije 
                    podrške ne bi bilo moguće realizovati festival ovog obima. 
                    Svakog dana oko 100 radnika sa 15 vozila JKP "Gradska čistoća" i "Zelenilo Beograd" uklanjalo smeća, 
                    a separacija otpada se radila na licu mesta, tako da je prikupljeno više od 3 i po tone limenki za reciklažu. 
                    Na signalizaciji oko festivalskog prostora je bilo angažovano 20 radnika i 6 vozila, 
                    a sve vreme trajanja festivala su dežurale i ekipe električara i javnog osvetljenja.
                    </p>
                </div>

                <div className='paragraf2'>
                    <h2>Dani piva u Zrenjaninu</h2>
                    <img className='imgfest2' src={Dani}  alt="slika4" />
                    <p >
                    „Dani piva” traju do nedelje, 2. septembra, uz raznovrstan program na više lokacija. 
                     To je jedna od najvećih tradicionalnih manifestacija u Srbiji, a svakako prepoznatljiv 
                     zrenjaninski turistički brend. Između ostalih, nastupiće: „Bajaga i instruktori”, „Riblja Čorba”, 
                        „Darko Rundek”, Haris Džinović, Marija Šerifović, „Deca loših muzičara”, „Goblini”, „Neverne bebe”, 
                        „Garavi Sokak”, Želko Vasić i drugi.„Ovo jeste najznačajnija turistička manifestacija u našem gradu. 
                        Očekujemo, pre svega, lepo vreme i da sve prođe u najboljem redu. Napravili smo dobar program. 
                        Preko 2.500 hiljade učesnika u programima za ovih sedam dana. Uvek nam je želja da budemo među 
                        najboljima u Srbiji i sigurno je ova naša manifestacija jedna od najboljih”, dodao je Janjić.
                        Nakon svečanog otvaranja manifestacije na Žitnom trgu, u utorak, 28. avgusta, u 21 sat, nastupiće Garavi sokak, 
                        a dva časa kasnije Željko Vasić. Svih narednih večeri, na centralnoj lokaciji održavaće se po tri koncerta, 
                        u terminima od 19:30, 21:00 i 23:00, saopštili su organizatori.   
                        </p>
                </div>
            </div>
          
        </div>
        </div>
      )}
    </Spring>
  );
}
