import React from "react";
import classes from "./allStyles.module.css";

export const Metric = () => {
  return (
    <div style={{display:'flex'}}>
      <span className={classes.metrics}>
        <p>80K Followers</p>
      </span>
      <span className={classes.metrics}>
        <p>803K Likes</p>
      </span>
      <span className={classes.metrics}>
        <p>1.4K Photos</p>
      </span>
    </div>
  );
};
