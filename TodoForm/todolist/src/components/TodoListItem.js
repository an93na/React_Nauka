import React from "react";

export const TodoListItem = (props) => {
    const {todo, setTodos} = props
  return (
    <tr>
      <td>{todo.title}</td>
      <td>{todo.priority}</td>
      <td>
        <input type="checkbox" name="" id="" readOnly checked={todo.status} />
      </td>
      <td>
        <div style={{ display: "flex", gap: 20 }}>
          <button>Edit</button>
          <button onClick={()=> {
            setTodos((prevState)=>prevState.filter((todoToCheck)=> todoToCheck.id !== todo.id))
          }}>Delete</button>
        </div>
      </td>
    </tr>
  );
};
