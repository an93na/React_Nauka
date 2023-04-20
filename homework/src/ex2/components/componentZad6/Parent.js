import React from "react";
import { Child } from "./child";



export function Parent() {
    return <div style={{backgroundColor: "blue", padding:"10px", margin: 20}}>
        <p>Parent.js</p>
        <Child/>
        <Child/>
        <Child/>
    </div>
}