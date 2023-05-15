import { useState } from "react";

export const SimpleTodoList = () => {
  const [tasks, setTask] = useState([
    "Pouczyć się TSa",
    // NaN,
    "Pouczyć się JSa",
    // undefined,
    "Pouczyć się CSSa",
  ]);
  const [todoTitle, setTodoTitle] = useState('czesc');
  return (
    <article>
      <h4>SimpleTodoList</h4>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
      }} >
        <input type="text" name="" id="" value={todoTitle} onChange={(event) => setTodoTitle(event.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      <ul></ul>
    </article>
  );
};
