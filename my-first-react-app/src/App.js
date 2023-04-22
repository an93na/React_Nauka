import "./App.css";
import "@picocss/pico";
import { Profile } from "./components/Profile";


function App() {
  return (
    <article className="App" style={{margin:"50px"}}>
      <Profile/>
    </article>
  );
}

export default App;
