import "./Faza2.scss";
import React from "react";
import Fermentacija from "../img/fermentacija.jpg";
import { Spring } from "react-spring/renderprops";

export default function Faza2() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className="f2style">
            <h1>Fermentacija</h1>
            <img className="faza2img" src={Fermentacija} alt="slika3" />
            <p className="paragFaza2">
              Nakon hlađenja počinje proces fermentacije sladovine. U
              proizvodnji lager piva razlikuju se dve vrste vrenja: glavno i
              naknadno vrenje. Od vrenja zavisi vrsta i kvalitet gotovog
              proizvoda, a proces počinje dodavanjem pivarskog kvasca u
              sladovinu.U toku vrenja se razgrađuju šećeri na alkohol i ugljen
              dioksid. Po završetku glavnog vrenja, dobijamo „mlado pivo“, koje
              se ostavlja da odleži na temperaturi od 0 °C. Naknadno vrenje
              traje 15 do 30 dana i u ovoj fazi pivo dobija prepoznatljiv ukus i
              miris.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}
