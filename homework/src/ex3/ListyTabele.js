import React, { useState } from "react";

const TASKS = [
  {
    title: "zrobić pranie",
    priority: "High",
    id: "1",
  },
  {
    title: "praca domowa",
    priority: "Medium",
    id: "2",
  },
  {
    title: "Zrobić zakupy",
    priority: "Low",
    id: "3",
  },
];

export const ListyTabele = () => {
  const [tasks, setTasks] = useState(TASKS);
  const tablicaStringow = ["test1", "test2", "test3"];

  return (
    <article>
      <h4>ListyTabele</h4>
      <ul>
        {tablicaStringow.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td><button onClick={() => {
                 const newTab = tasks.filter((taskVerify) => {
                    return taskVerify.id !== task.id
                 })
                 setTasks(newTab)
                }}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};
