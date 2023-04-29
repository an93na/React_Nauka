import React, { useState } from "react";
import classes from "./Metric.module.css";

export const Metric1 = () => {
  const [name, setName] = useState("Work");
  const [label, setLabel] = useState("32hrs");
  const [prevweek, setPrevweek] = useState("Last Week - 36hrs");
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <p className={classes.label}>
          {name} <span>•••</span>
        </p>
        <p className={classes.output}>{label}</p>
        <p className={classes.lastWeekOutput}>{prevweek}</p>
      </div>
    </div>
  );
};
