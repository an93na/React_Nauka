import React from "react";
import classes from "./Zadanie5.module.css"


export const Metric1 = () =>{
    return (
        <div className={classes.artykulRozmiar}>
          <div className={`${classes.wierzchTlo} ${classes.tloPom}`}>
            <div className={classes.spodTlo}>
              <p className={classes.paragraf}>
                Work <span>•••</span>
              </p>
              <p className={classes.liczba}>32hrs</p>
              <p className={classes.dopisek}>Last Week - 36hrs</p>
            </div>
          </div>
        </div>
      );
}