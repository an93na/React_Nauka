import './App.css';
import "@picocss/pico"
import { KomponentFunkcyjny } from './ex1/komponentFunkcyjny';
import { StyleInLine } from './ex1/StyleInline';
import { StyleCSS } from './ex1/StyleCSS';
import { StyleCSSModules } from './ex1/StyleCSSModules';
import { Zadanie1 } from './ex1/Zadanie1';
import { Zadanie2 } from './ex1/Zadanie2';
import { Zadanie3 } from './ex1/Zadanie3';
import { Zadanie4 } from './ex1/Zadanie4';
import { Relacje } from './ex2/Relacje';
import { RelacjeRozsz } from './ex2/Relacje_relacje';
import { Zdanie5 } from './ex2/Zadanie5';
import { Zadanie6 } from './ex2/Zadanie6';
import { Zadanie7 } from './ex2/Zadanie7';
import { Assets } from './ex3/Asset';



function App() {
  return (
    <div className="App">
      <KomponentFunkcyjny/>
      <StyleInLine/>
      <StyleCSS/>
      <StyleCSSModules/>
      <Zadanie1/>
      <Zadanie2/>
      <Zadanie3/>
      <Zadanie4/>
      <Relacje/>
      <RelacjeRozsz/>
      <Zdanie5 />
      <Zadanie6 />
      <Zadanie7 />
      <Assets />
    </div>
    
  );
}

export default App;
