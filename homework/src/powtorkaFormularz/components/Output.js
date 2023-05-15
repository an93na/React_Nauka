import React from "react";



export const Output = ({value, color}) => {
    return <div style={{border:`1px solid ${color}`, padding:10, margin:5}}>{value}</div>
}