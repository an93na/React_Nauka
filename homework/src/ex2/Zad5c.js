import React from "react";
import classes from "./Zadanie5.module.css"


export const Metric3 = () =>{
    return (
        <div className={classes.artykulRozmiar}>
          <div className={`${classes.wierzchTlo} ${classes.tloNieb}`}>
            <div className={classes.spodTlo}>
              <p className={classes.paragraf}>
                Study <span>•••</span>
              </p>
              <p className={classes.liczba}>4hrs</p>
              <p className={classes.dopisek}>Last Week - 7hrs</p>
            </div>
          </div>
        </div>
      );
}