import React from "react";

export const TodoListItem = (props) => {
    const {todo} = props
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
          <button>Delete</button>
        </div>
      </td>
    </tr>
  );
};
