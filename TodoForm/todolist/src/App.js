import { useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { EditModal } from "./components/EditModal";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <article>Hello Word</article>
      <Form setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <EditModal />
    </div>
  );
}

export default App;
