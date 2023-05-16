import React, { useEffect, useState } from "react";



export const ListZ4 = () => {
    const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
    
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Completed</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>
                <button>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}


