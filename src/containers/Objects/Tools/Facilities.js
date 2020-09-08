import React from "react";
import "./Facilities.scss";
import { facilities } from "../../../shared/shared";
export default function Facilities(props) {
  return (
    <div className={`facilities ${props.classes}`}>
      {Object.entries(props.facilities).map((facility, index) => {
        return facility[1] ? (
          <div key={index}>
            <i className={`fas fa-${facility__icon(facilities, facility)}`}></i>
          </div>
        ) : null;
      })}
    </div>
  );
}
const facility__icon = (facilities, facility) => {
  let num = facilities.map((f) => Object.keys(f)[0]).indexOf(facility[0]);
  return facilities[num].icon;
};
