import React from "react";
import classes from "./Zadanie4.module.css";

export const Zadanie4 = () => {
  return (
    <article className={classes.artykulRozmiar}>
      <p>Metric</p>
      <div className={classes.wierzchTlo}>
        <div className={classes.spodTlo}>
          <p className={classes.paragraf}>
            Work <span>•••</span>
          </p>
          <p className={classes.liczba}>32hrs</p>
          <p className={classes.dopisek}>Last Week - 36hrs</p>
        </div>
      </div>
    </article>
  );
};
