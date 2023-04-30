import React, { useState } from "react";
import classes from "./Metric.module.css";

export const Metric1 = (props) => {
  
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <p className={classes.label}>
          {props.name} <span>•••</span>
        </p>
        <p className={classes.output}>{`${props.label}hrs`}</p>
        <p className={classes.lastWeekOutput}>{props.prevweek}</p>
      </div>
    </div>
  );
};
