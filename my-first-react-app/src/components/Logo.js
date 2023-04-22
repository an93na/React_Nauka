import React from "react";
import classes from "./allStyles.module.css"
import logo from "./1.jpg"


export const Logo = () =>{
    return <img src={logo} alt="logo" className={classes.logo}/>
}