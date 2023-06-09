import React, { useState } from "react";

export const Form = (props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  return (
    <article>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            id: Math.random(),
            status: false,
            title,
            priority,
          };
          props.setTodos((prevState) => [...prevState, newTodo]);
          setPriority('');
          setTitle('');
        }}
      >
        <input
        required
          type="text"
          name=""
          id=""
          value={title}
          placeholder="Todo title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <select
        required
          name=""
          id=""
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="" hidden>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};
