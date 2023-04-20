import React from "react";
import classes from "./Zadanie5.module.css"
import { Metric1 } from "./Zad5a";
import { Metric2 } from "./Zad5b";
import { Metric3 } from "./Zad5c";


export const Zdanie5 = () => {
    return <article className={classes.art}>
        <Metric1/>
        <Metric2/>
        <Metric3/>
    </article>
}