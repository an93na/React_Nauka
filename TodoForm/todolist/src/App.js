import { useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { EditModal } from "./components/EditModal";
import { Filters } from "./components/Filters";
import { Metrics } from "./components/Metrics";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [search, setSearch] = useState({
    title:'',
    status: '',
    priority: ''
  });

  const todosToDisplay = todos
    .filter(({ title }) => {
      return !search.title || title.includes(search.title);
    })
    .filter(({ status }) => {
      return (
        !search.status ||
        (status && search.status === "done") ||
        (!status && search.status === "todo")
      );
    })
    .filter(({ priority }) => {
      return !search.priority || priority === search.priority;
    });

  return (
    <div className="container">
      <article>Hello Word</article>
      <Form setTodos={setTodos}/>
      <Filters search={search} setSearch={setSearch}/>
      <Metrics todos={todos}/>
      <TodoList todos={todosToDisplay} setTodos={setTodos} setTodoToEdit={setTodoToEdit}/>
      {!!todoToEdit && <EditModal setTodoToEdit={setTodoToEdit} todoToEdit={todoToEdit} setTodos={setTodos}/>}
    </div>
  );
}

export default App;
