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
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <article>
      <h4>ListyTabele</h4>
      <ul>
        {tablicaStringow.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(title !== '' && priority !== ''){
          const newTask = {
            id: Math.random(),
            title: title,
            priority: priority,
          };
          setTasks([...tasks, newTask]);
          setTitle("");
          setPriority("");
        }}}
      >
        <input
          type="text"
          placeholder="Enter title ..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <select
          name="priority"
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" hidden>
            Select piriority
          </option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Submit</button>
      </form>
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
                <td>
                  <button
                    onClick={() => {
                      const newTab = tasks.filter((taskVerify) => {
                        return taskVerify.id !== task.id;
                      });
                      setTasks(newTab);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};
