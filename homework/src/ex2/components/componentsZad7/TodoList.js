import React from "react";
import classes from "./StyleComponent.module.css"
import { TodoListItem } from "./TodoListItem";


export const TodoList = () => {
    return <div className={classes.statisticBackgroundColor}>
        <p>TodoList</p>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
    </div>
}