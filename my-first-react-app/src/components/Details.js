import React from "react";
import classes from "./allStyles.module.css"


export const Deatils = () =>{
    return <div className={classes.details} style={{display:"flex", flexDirection: "column"}}>
        <p className={classes.przerwa}><b>Victor Crest</b> 26</p><p className={classes.London}>London</p>
    </div>
}