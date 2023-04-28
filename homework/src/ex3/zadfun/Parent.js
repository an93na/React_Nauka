import React from "react";
import { ChildDoGrand } from "./Child";



export const ParentdoGrand = (props) =>{
    return <div style={{ margin: 10, padding: 10, border: "1px solid blue" }}>
        Parent
        <ChildDoGrand name={props.name} lastName= {props.lastName} jakasFunkcja={props.jakasFunkcja}/>
    </div>
}