import React, { useState } from "react";

const TASKS =
    [
        {
          "title": "zrobić pranie",
          "priority": "High"
        },
        {
          "title": "praca domowa",
          "priority": "Medium"
        },
        {
          "title": "Zrobić zakupy",
          "priority": "Medium"
        }
      ]

export const ListyTabele = () => {
    const [tasks, setTasks] = useState(TASKS);
    const tablicaStringow = ['test1', 'test2', 'test3'];
    
    return <article>
        <h4>ListyTabele</h4>
        <ul>
            {tablicaStringow.map( (element) => {
                return <li key={element}>{element}</li>
            })}
        </ul>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Priority</th>
                    <th></th>
                </tr>
            </thead>
        </table>
    </article>
}