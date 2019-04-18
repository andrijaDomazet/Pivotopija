import React from "react";
import BeerLady1 from "../Lender/lenderIMG/BeerLady1.png";
import pluto from "../Lender/lenderIMG/pluto.png";
import srednjiLogo from "../Lender/lenderIMG/srednjilogo.png";
import "../Lender/Lender.scss";
import { Spring } from "react-spring";

export default function Lender() {
  return (
    <div className="Lstyle">
      <div className="Lady1">
        <img src={BeerLady1} alt="slika2" />
      </div>

      {/*<div className='srednjiLogo'>
          <img src={srednjiLogo}  alt='slika2'/>
        </div> */}

      <div className="pluto">
        <img src={pluto} alt="slika3" />
      </div>
    </div>
  );
}
