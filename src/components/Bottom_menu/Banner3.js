import React from "react";
import { Spring } from "react-spring/renderprops";
import banner3 from "../../img/banner3.jpg";

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
              <img src={banner3} alt="" />
            </div>
            <h3>Banner3</h3>
            
          </div>
        </div>
      )}
    </Spring>
  );
}
