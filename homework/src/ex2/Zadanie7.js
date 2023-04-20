import React from "react";
import classes from "./Zadanie7CSS.module.css"
import { TodoFrom } from "./components/componentsZad7/TodoForm";
import { Statistic } from "./components/componentsZad7/Statistics";
import { TodoList } from "./components/componentsZad7/TodoList";

export const Zadanie7 = () => {
  return (
    <article>
      <div className={classes.appContainer}>
        <p><b>TodoApp</b></p>
        <TodoFrom/>
        <Statistic/>
        <TodoList/>
      </div>
    </article>
  );
};

// - Metric.js
//  *   - Statistics.js
//  *   - TodoForm.js
//  *   - TodoList.js
//  *   - TodoListItem.js
//  * - używaj named exportów/importów
