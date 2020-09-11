import React, { lazy, Suspense } from "react";
import "./Objekat.scss";
import PodaciObjekta from "./PodaciObjekta";
const SlikaObjekta = lazy(() => import("./SlikaObjekta"));

export default function Objekat(props) {
  return (
    <article
      className={`objekat ${props.classes}`}
      ref={props.refProp}
      onClick={() => {
        return props.classes === "bigScreen"
          ? ""
          : props.changeScreen(props.objekat);
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <SlikaObjekta
          classes={props.classes}
          podaci={props.objekat}
          setSmallObjects={props.setSmallObjects}
          removeObjekat={props.removeObjekat}
        />
      </Suspense>
      <PodaciObjekta classes={props.classes} podaci={props.objekat} />
    </article>
  );
}
