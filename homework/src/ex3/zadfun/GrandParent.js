import React from "react";
import { Parent } from "../../ex2/components/componentZad6/Parent";
import { ParentdoGrand } from "./Parent";



export const GrandParent = () => {
    const name = 'Janusz';
    const lastName = 'Grażyna'
    const age = 23;
    
    const jakasFunkcja = () => {
        console.log('Siema');
    }

    return (
        <article>
            <h4>GrandParent</h4>
            <ParentdoGrand name={name} lastName={lastName} jakasFunkcja={jakasFunkcja}/>
        </article>
    )
}