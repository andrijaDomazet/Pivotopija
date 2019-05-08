import React from "react";

export default function NazivSlajda(props) {
  return (
    <div className="pivotopija" onClick={props.goToPrevSlide}>
      <p>Pivotopija</p>
    </div>
  );
}
