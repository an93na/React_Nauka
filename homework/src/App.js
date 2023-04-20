import './App.css';
import "@picocss/pico"
import { KomponentFunkcyjny } from './ex1/komponentFunkcyjny';
import { StyleInLine } from './ex1/StyleInline';
import { StyleCSS } from './ex1/StyleCSS';

function App() {
  return (
    <div className="App">
      <KomponentFunkcyjny/>
      <StyleInLine/>
      <StyleCSS/>
    </div>
    
  );
}

export default App;
