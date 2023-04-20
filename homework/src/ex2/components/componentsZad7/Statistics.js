import React from "react";
import classes from "./StyleComponent.module.css"
import { Metric } from "./Metric";


export const Statistic = () => {
    return <div className={classes.statisticBackgroundColor}>
        <p>Statistic.js</p>
        <div style={{display: "flex"}}>
            <Metric />
            <Metric />
            <Metric />
        </div>
    </div>
}