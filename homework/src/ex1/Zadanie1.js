import React from "react";
import classes from "./Zadanie1.module.css";

export const Zadanie1 = () => {
  return (
    <article className={classes.mainContainer}>
      <p className={classes.naglowek}>Style CSS Exercise</p>
      <span className={classes.typowySpan}>Testowy span</span>
      <p className={classes.oscylowanyParagraf}>
        przykładowy ostylowany paragraf
      </p>
      <p className={classes.przekreslonyTekst}>
        przekreślony text ten styl przyda się jeszcze później żeby go uzyskać
        skorzystaj z właściowści text-decoration{" "}
      </p>
    </article>
  );
};
