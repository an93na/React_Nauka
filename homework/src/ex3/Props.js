import React from "react";


const ComponentWithProps = (props) => {
    return <div>
        Suma dwoch liczb: {props.number1+props.number2}
    </div>
}


export const Props = () =>{
    return <article>
        <h4>Propsy</h4>
        <ComponentWithProps number1={20} number2={10}/>
    </article>
}