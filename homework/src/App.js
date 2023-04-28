import "./App.css";
import "@picocss/pico";
import { KomponentFunkcyjny } from "./ex1/komponentFunkcyjny";
import { StyleInLine } from "./ex1/StyleInline";
import { StyleCSS } from "./ex1/StyleCSS";
import { StyleCSSModules } from "./ex1/StyleCSSModules";
import { Zadanie1 } from "./ex1/Zadanie1";
import { Zadanie2 } from "./ex1/Zadanie2";
import { Zadanie3 } from "./ex1/Zadanie3";
import { Zadanie4 } from "./ex1/Zadanie4";
import { Relacje } from "./ex2/Relacje";
import { RelacjeRozsz } from "./ex2/Relacje_relacje";
import { Zdanie5 } from "./ex2/Zadanie5";
import { Zadanie6 } from "./ex2/Zadanie6";
import { Zadanie7 } from "./ex2/Zadanie7";
import { Assets } from "./ex3/Asset";
import { StanKomponentu } from "./ex3/StanKomponentu";
import { Eventy } from "./ex3/Eventy";
import { ZadCom1 } from "./ex3/zadCom1";
import { ZadCom2 } from "./ex3/zadCom2";
import { ZadCom3 } from "./ex3/ZadCom3";
import { ZadCom4 } from "./ex3/ZadCom4";
import { CSSEditor } from "./ex3/CSSEditor";
import { Calculator } from "./ex3/Calculator";
import { Form } from "./ex3/Form";
import { Props } from "./ex3/Props";
import { PropsFunkcje } from "./ex3/PropsFunkcje";
import { Parent1 } from "./ex3/ZadChlPr1";
import { Parent2 } from "./ex3/ZadChlPr2";
import { Parent3 } from "./ex3/ZadChlPr3";
import { Parent4 } from "./ex3/ZadChlPr4";
import { CounterWithProps } from "./ex3/CounterWithProps";
import { ListyTabele } from "./ex3/ListyTabele";
import { GrandParent } from "./ex3/zadfun/GrandParent";

function App() {
  return (
    <div className="App">
      <KomponentFunkcyjny />
      <StyleInLine />
      <StyleCSS />
      <StyleCSSModules />
      <Zadanie1 />
      <Zadanie2 />
      <Zadanie3 />
      <Zadanie4 />
      <Relacje />
      <RelacjeRozsz />
      <Zdanie5 />
      <Zadanie6 />
      <Zadanie7 />
      <Assets />
      <StanKomponentu />
      <Eventy />
      <ZadCom1 />
      <ZadCom2 />
      <ZadCom3 />
      <ZadCom4 />
      <CSSEditor />
      <Calculator />
      <Form />
      <Props />
      <PropsFunkcje />
      <Parent1 />
      <Parent2 />
      <Parent3 />
      <Parent4 />
      <CounterWithProps />
      <ListyTabele />
      <GrandParent/>
    </div>
  );
}

export default App;
