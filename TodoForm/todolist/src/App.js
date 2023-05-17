import { useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <article>Hello Word</article>
      <Form setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
