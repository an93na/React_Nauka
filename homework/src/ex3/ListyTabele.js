import React from "react";



export const ListyTabele = () => {
    const tablicaStringow = ['test1', 'test2', 'test3'];
    
    return <article>
        <h4>ListyTabele</h4>
        <ul>
            {tablicaStringow.map( (element) => {
                return <li key={element}>{element}</li>
            })}
        </ul>
    </article>
}