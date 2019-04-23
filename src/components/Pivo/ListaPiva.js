import React, { Component } from "react";
import { spisakPiva } from "../allData";
import "./ListaPiva.scss";
import Pivo from "./Pivo";

export default class ListaPiva extends Component {
  state = {
    piva: spisakPiva
  };
  render() {
    const { piva } = this.state;
    return (
      <div className="lista_piva">
        {piva.map(pivo => {
          return <Pivo key={pivo.id} pivo={pivo} />;
        })}
      </div>
    );
  }
}
