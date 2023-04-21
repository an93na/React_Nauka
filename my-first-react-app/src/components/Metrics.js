import React from "react";
import classes from "./allStyles.module.css";

export const Metric = () => {
  return (
    <div style={{display:'flex'}}>
      <span className={classes.metrics}>
        <p><b>80K</b> Followers</p>
      </span>
      <span className={classes.metrics}>
        <p><b>803K</b> Likes</p>
      </span>
      <span className={classes.metrics}>
        <p><b>1.4K</b> Photos</p>
      </span>
    </div>
  );
};
