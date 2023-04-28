import React from "react";



export const GrandChild = (props) =>{
    return <div style={{ margin: 10, padding: 10, border: "1px solid red" }}>
        GrandChild 
        <ul>
            <li>Name: {props.name}</li>
            <li>Last Name: {props.lastName}</li>
            <li>Age: {props.age}</li>
        </ul>
        <button onClick={props.jakasFunkcja}>Click me</button>
    </div>
}
