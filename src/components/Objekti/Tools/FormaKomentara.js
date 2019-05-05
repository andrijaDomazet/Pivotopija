import React from "react";
import "./FormaKomentara.scss";
import ToggleComments from "./ToggleComments";

export default function FormaKomentara(props) {
  return (
    <div>
      <ToggleComments click={props.okidacUpisaKomentara} />
    </div>
  );
}
