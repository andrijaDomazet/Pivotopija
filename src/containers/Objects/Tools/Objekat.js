import React, { lazy, Suspense } from "react";
import "./Objekat.scss";
import PodaciObjekta from "./PodaciObjekta";
const SlikaObjekta = lazy(() => import("./SlikaObjekta"));

export default function Objekat(props) {
  return (
    <article className="objekat" ref={props.refProp}>
      <Suspense fallback={<div>Loading...</div>}>
        <SlikaObjekta
          podaci={props.objekat}
          removeObjekat={props.removeObjekat}
        />
      </Suspense>
      <PodaciObjekta podaci={props.objekat} />
    </article>
  );
}
