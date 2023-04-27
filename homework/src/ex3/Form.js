import React, { useState } from "react";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [task, setTask] = useState([]);

  const defSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && priority !== ""){
    const newTask = { title, priority };
    setTask((prev) => [...prev, newTask]);
    setTitle("");
    setPriority("");
  }};

  return (
    <article>
      <h4>Form</h4>
      <form onSubmit={defSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name=""
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" hidden>
            Select priority
          </option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(task, null, 2)}</pre>
    </article>
  );
};
