import './App.css';
import "@picocss/pico"
import { KomponentFunkcyjny } from './ex1/komponentFunkcyjny';
import { StyleInLine } from './ex1/StyleInline';
import { StyleCSS } from './ex1/StyleCSS';
import { StyleCSSModules } from './ex1/StyleCSSModules';
import { Zadanie1 } from './ex1/Zadanie1';


function App() {
  return (
    <div className="App">
      <KomponentFunkcyjny/>
      <StyleInLine/>
      <StyleCSS/>
      <StyleCSSModules/>
      <Zadanie1/>
    </div>
    
  );
}

export default App;
