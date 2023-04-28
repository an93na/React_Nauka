import React from "react";



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
        </article>
    )
}