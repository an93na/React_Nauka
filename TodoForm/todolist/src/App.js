import { useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState("");
  
  return (
    <div className="container">
      <article>Hello Word</article>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
