import "./App.css";
import "@picocss/pico";
import { Profile } from "./components/Profile";
import { Test1 } from "./components/jakies_testy/Test1";
import { Test2 } from "./components/jakies_testy/Test2";
import { FormularzZTodo } from "./components/jakies_testy/FormularzZTodo";
import { Parent } from "./components/components2/Parent";


function App() {
  return (
    <article className="App" style={{margin:"50px"}}>
      <Profile/>
      <Test1/>
      <Test2/>
      <FormularzZTodo/>
      <Parent />
    </article>
  );
}

export default App;
