import React from "react";
import { Spring } from "react-spring/renderprops";
import banner4 from "../../img/banner4.jpg";

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
              <img src={banner4} alt="" />
            </div>
            <h3>Banner4</h3>
            
          </div>
        </div>
      )}
    </Spring>
  );
}
