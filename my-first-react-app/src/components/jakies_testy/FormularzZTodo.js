import React, { useState } from "react";

export const FormularzZTodo = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const onSubmitPreventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>Lista rzeczy</h3>
      <div style={{display:"flex", gap: 5}}>
      <form onSubmit={onSubmitPreventDefault}></form>
      <input
        type="text"
        value={title}
        placeholder="wprowadz zadanie"
        onChange={({ target }) => setTitle(target.value)}
      />
      <select>
        <option value={'High'}>High</option>
        <option value={'Medium'}>Medium</option>
        <option value={'Low'}>Low</option>
      </select>
      <button type="submit">Submit</button>
      </div>
    </div>
  );
};
