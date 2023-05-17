import { useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { EditModal } from "./components/EditModal";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);

  return (
    <div className="container">
      <article>Hello Word</article>
      <Form setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} setTodoToEdit={setTodoToEdit}/>
      {!!todoToEdit && <EditModal />}
    </div>
  );
}

export default App;
