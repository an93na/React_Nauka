import React, { useState } from "react";

const TASKS = [{ title: "Zrobić pranie", priority: "low", id: 92 }];

export const FormularzZTodo = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [tasks, setTasks] = useState(TASKS);

  const onSubmitPreventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>Lista rzeczy</h3>

      <form
        onSubmit={onSubmitPreventDefault}
        style={{ display: "flex", gap: 5 }}
      >
        <input
          type="text"
          value={title}
          placeholder="wprowadz zadanie"
          onChange={({ target }) => setTitle(target.value)}
        />
        <select
          name="priority"
          value={priority}
          onChange={({ target }) => setPriority(target.value)}
        >
          <option value={"High"}>High</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Low"}>Low</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            {" "}
            <th>Title</th>
            <th>Priority</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.id}</td>
                <td>
                    <button></button>
                </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
