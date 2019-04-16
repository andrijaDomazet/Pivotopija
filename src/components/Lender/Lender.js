import React from "react";
import BeerLady1 from "./lenderIMG/BeerLady1.png";
import staripapir from "./lenderIMG/staripapir.png";
import plutoDIV from "./lenderIMG/plutoDIV.png";
import srednjilogo from "./lenderIMG/srednjilogo.png";
import "./Lender.scss";
import { Spring } from "react-spring";

export default function Lender() {
  return (
    <div className="Lstyle">
      <div className="lady">
        <img src={BeerLady1} width="100%" alt="slika2" />
      </div>

      <div className="pluto">
        <img src={plutoDIV} alt="slika4" />
      </div>

      <div className="papir">
        <img src={staripapir} alt="slika1" />
      </div>
    </div>
  );
}
