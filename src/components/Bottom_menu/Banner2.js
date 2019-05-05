import React from "react";
import { Spring } from "react-spring/renderprops";
import banner2 from "../../img/banner2.jpg";

export default function Banner2() {
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
              <img src={banner2} alt="" />
            </div>
            <h3>Izbor ambalaze</h3>
          </div>
        </div>
      )}
    </Spring>
  );
}
