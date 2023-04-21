import React from "react";
import classes from "./allStyles.module.css";

export const Metric = () => {
  return (
    <div style={{display:'flex'}}>
      <div className={classes.metrics}>
        <p className={classes.liczbaF}><b>80K</b></p><p>Followers</p>
      </div>
      <div className={classes.metrics}>
        <p className={classes.liczbaF}><b>803K</b></p><p>Likes</p>
      </div>
      <div className={classes.metrics}>
        <p className={classes.liczbaF}><b>1.4K</b></p><p> Photos</p>
      </div>
    </div>
  );
};
