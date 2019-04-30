import React from "react";
import { Spring } from "react-spring/renderprops";
import banner3 from "../../img/banner3.jpg";

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
            <div>
              <img src={banner3} alt="" />
            </div>
            <h3>Prve serije</h3>
          </div>
        </div>
      )}
    </Spring>
  );
}
