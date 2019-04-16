import React from "react";
import { Spring } from "react-spring/renderprops";
import banner1 from "../../img/banner1.jpg";

export default function Banner4() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1500, duration: 2000 }}
    >
      {props => (
        <div style={props}>
          <div className="banners">
            <div>
              <img src={banner1} alt="" />
            </div>
            <h1>Banner4</h1>
            <p>Mesto za Vašu reklamu</p>
          </div>
        </div>
      )}
    </Spring>
  );
}
