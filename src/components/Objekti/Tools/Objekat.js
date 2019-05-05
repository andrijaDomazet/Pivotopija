import React, { Component, lazy, Suspense } from "react";
import "./Objekat.scss";
import PodaciObjekta from "./PodaciObjekta";
const SlikaObjekta = lazy(() => import("./SlikaObjekta"));

export default class Objekat extends Component {
  render() {
    const { objekat, removeObjekat } = this.props;
    return (
      <article className="objekat">
        <Suspense fallback={<div>Loading...</div>}>
          <SlikaObjekta podaci={objekat} removeObjekat={removeObjekat} />
        </Suspense>
        <PodaciObjekta podaci={objekat} />
      </article>
    );
  }
}
