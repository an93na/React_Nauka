import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = (props) => {
  return (
    <article>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                setTodos={props.setTodos}
              />
            );
          })}
        </tbody>
      </table>
      <dialog open>
        <article>
          <h2>Edit todo</h2>
          <form action="">
            <label htmlFor="title">Title</label>
            <input type="text" name="" id="title" />
            <label htmlFor="priority">Priority</label>
            <select name="" id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <label htmlFor="status">Status</label>
            <input type="checkbox" name="" id="status" />
            <div style={{display: 'flex', gap:20, marginTop: 50}}>
                <button>Submit</button>
                <button>Cancel</button>
            </div>
          </form>
        </article>
      </dialog>
    </article>
  );
};
