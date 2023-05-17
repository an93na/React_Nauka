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
            return <TodoListItem key={todo.id} todo={todo} />;
          })}
        </tbody>
      </table>
    </article>
  );
};
