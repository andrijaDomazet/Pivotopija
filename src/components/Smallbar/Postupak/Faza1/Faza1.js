import React from "react";
import { Spring } from "react-spring/renderprops";
import Sastojci from "../img/sastojci.jpg";
import "./Faza1.scss";

export default function Faza1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className="f1style">
            <h1>Proizvodnja sladovine</h1>
            <img className="faza1img" src={Sastojci} alt="slika3" />
            <p className="paragFaza1">
              Slad je osnovni poluproizvod za dobijanje piva. Aroma, ukus, boja,
              trajnost i postojanost pene piva u znatnoj meri zavise od osobina
              slada koji se prerađuje. Osim ječma, za pripremu sladovine mogu se
              koristiti i druge žitarice, kao na primer pšenica, raž, proso i
              kukuruz, što zavisi od ukusa potrošača na svakom od tržišta gde se
              pivo proizvodi. Od slada se dobija sladovina, vodeni ekstrakt
              slada koji se dobija posebnim postupkom u tzv. „varionici“. Prvo
              se slad melje, pa se ukomljava. Ukomljavanje predstavlja proces
              mešanja sirovina sa vodom određene temperature, gde se sastojci
              slada razgrađuju. Nakon toga sledi ceđenje, odnosno filtriranje
              sladovine. Tako pripremljenoj sladovini u procesu kuvanja dodaje
              se hmelj koji je zadužen za aromu i specifičnu gorčinu. U daljem
              procesu dolazi do filtracije sladovine - odvajanje taloga i
              hlađenja. Sada je sladovina spremna za sledeću fazu proizvodnje
              piva - fermentaciju.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}
