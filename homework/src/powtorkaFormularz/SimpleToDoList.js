import { useState } from "react";

export const SimpleTodoList = () => {
  const [tasks] = useState([
    "Pouczyć się TSa",
    // NaN,
    "Pouczyć się JSa",
    // undefined,
    "Pouczyć się CSSa",
  ]);
  const [todoTitle, setTodoTitle] = useState('');
  return (
    <article>
      <p>SimpleTodoList</p>
      <form action="" >
        <input type="text" name="" id="" />
        <button type="submit">Submit</button>
      </form>
      <ul></ul>
    </article>
  );
};
