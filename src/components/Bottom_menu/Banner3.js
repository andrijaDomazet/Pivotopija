import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Banner3() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 3500, duration: 2000 }}
    >
      {props => (
        <div style={props}>
          <div className="banners">
            <h1>Banner3</h1>
            <p>Mesto za Vašu reklamu</p>
          </div>
        </div>
      )}
    </Spring>
  );
}
