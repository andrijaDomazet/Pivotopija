import React from "react";
import { Spring } from "react-spring/renderprops";
import banner3 from "../../img/kviz.png";
import "../BottomMenu/Bottom_menu.scss";

export default function Banner3() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 3000, duration: 1500 }}
    >
      {props => (
        <div style={props}>
          <div className="banners">
            <div className="banner3-slika">
              <img src={banner3} alt="" />
            </div>
            <p>Pivksi kviz</p>
          </div>
        </div>
      )}
    </Spring>
  );
}
