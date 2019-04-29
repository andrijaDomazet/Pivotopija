import React from "react";
import { Spring } from "react-spring/renderprops";
import banner2 from "../../img/banner2.jpg";

export default function Banner2() {
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
              <img src={banner2} alt="" />
            </div>
            <h3>Banner2</h3>
            
          </div>
        </div>
      )}
    </Spring>
  );
}
