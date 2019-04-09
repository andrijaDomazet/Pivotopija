import React from "react";
import { Spring } from "react-spring/renderprops";

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
            <h1>Banner4</h1>
            <p>Mesto za Vašu reklamu</p>
          </div>
        </div>
      )}
    </Spring>
  );
}
