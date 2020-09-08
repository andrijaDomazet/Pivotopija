import React, { lazy, Suspense } from "react";
import "./Objekat.scss";
import PodaciObjekta from "./PodaciObjekta";
const SlikaObjekta = lazy(() => import("./SlikaObjekta"));

export default function Objekat(props) {
  // const closeObject = () => {
  //   props.changeScreen();
  // };
  return (
    <article
      className={`objekat ${props.classes}`}
      ref={props.refProp}
      onClick={() => {
        props.changeScreen(props.objekat);
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <SlikaObjekta
          classes={props.classes}
          podaci={props.objekat}
          removeObjekat={props.removeObjekat}
        />
      </Suspense>
      <PodaciObjekta classes={props.classes} podaci={props.objekat} />
    </article>
  );
}
