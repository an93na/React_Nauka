import React, { useState } from "react"



const ObiektUser= {name: "Pan", lastName: "Kulka", age: 16};

const TODO = {name: 'zrobić pranie', priority: 'High'};


export const Test1 = () => {
    const [user, setUser] = useState(ObiektUser);
    const [zad, setZad] = useState(TODO);

    return (
        <article>
            <h3>Wyświetl Stan</h3>
            <h4>User:</h4>
        </article>
    )
}