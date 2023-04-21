import React from "react";
import classes from "./allStyles.module.css"
import { Metric } from "./Metrics";
import { Logo } from "./Logo";
import { Deatils } from "./Details";


export const Profile = () =>{
    return <div className={classes.profile}>
        <Logo/>
        <Deatils/>
        <Metric/>
    </div>
}