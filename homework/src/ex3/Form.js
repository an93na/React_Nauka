import React, { useState } from "react";

export const Form = () => {
  const [task, setTask] = useState();
  const [priority, setPriority] = useState();

  return (
    <article>
      <h4>Form</h4>
      <form>
        <input type="text" name="" id="" placeholder="Task title" />
        <input type="text" name="" id="" placeholder="Select priority" />
        <button>Submit</button>
      </form>
    </article>
  );
};
