import React from "react";
import classes from "./Zadanie5.module.css"


export const Metric2 = () =>{
    return (
        <div className={classes.artykulRozmiar}>
          <div className={`${classes.wierzchTlo} ${classes.tloRoz}`}>
            <div className={classes.spodTlo}>
              <p className={classes.paragraf}>
                Play <span>•••</span>
              </p>
              <p className={classes.liczba}>10hrs</p>
              <p className={classes.dopisek}>Last Week - 8hrs</p>
            </div>
          </div>
        </div>
      );
}