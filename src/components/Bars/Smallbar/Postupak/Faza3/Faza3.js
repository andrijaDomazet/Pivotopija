import "./Faza3.scss";
import React from "react";
import Filter from "../img/filter.jpg";
import { Spring } from "react-spring/renderprops";

export default function Faza3() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className="f3style">
            <h1>Filtracija i priprema ambalaže za punjenje</h1>
            <img className="faza3img" src={Filter} alt="slika3" />

            <p className="paragFaza3">
              Pre punjenja piva u maloprodajnu ambalažu realizuje se proces
              filtracije kojim se dobija konačan izgled i ukus piva. Filtracijom
              se uklanjaju zaostale materije koje doprinose mutnoći i dobija se
              bistro pivo. Procesom pasterizacije pivo postaje i biološki
              stabilno i spremno za pakovanje u različite vrste ambalaže -
              staklene boce, limenke, PET boce i burad.
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}
