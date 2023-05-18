import { useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { EditModal } from "./components/EditModal";
import { Filters } from "./components/Filters";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [search, setSearch] = useState({
    title:'',
    status: '',
    priority: ''
  })
  return (
    <div className="container">
      <article>Hello Word</article>
      <Form setTodos={setTodos}/>
      <Filters search={search} setSearch={setSearch}/>
      <TodoList todos={todos} setTodos={setTodos} setTodoToEdit={setTodoToEdit}/>
      {!!todoToEdit && <EditModal setTodoToEdit={setTodoToEdit} todoToEdit={todoToEdit} setTodos={setTodos}/>}
    </div>
  );
}

export default App;
