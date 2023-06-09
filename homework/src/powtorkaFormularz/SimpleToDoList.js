import { useState } from "react";
import { WeightConverter } from "./components/WeightConverter";

export const SimpleTodoList = () => {
  const [tasks, setTask] = useState([
    "Pouczyć się TSa",
    // NaN,
    "Pouczyć się JSa",
    // undefined,
    "Pouczyć się CSSa",
  ]);
  const [todoTitle, setTodoTitle] = useState("czesc");
  return (
    <article>
      <WeightConverter />
      <h4>SimpleTodoList</h4>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (todoTitle !== "") {
            setTask((prevState) => [...prevState, todoTitle]);
            setTodoTitle("");
          }
        }}
      >
        <input
          type="text"
          name=""
          id=""
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {tasks.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
    </article>
  );
};
