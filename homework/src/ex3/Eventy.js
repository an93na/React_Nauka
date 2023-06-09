import React, { useState } from "react";
import { Counter } from "./components/Counter";
import { Formularz } from "./components/Formularz";

export const Eventy = () => {
  const [state, setState] = useState([]);
  const [tekstInputValue, setTekstInputValue] = useState("Siema");
  const [tekstInputValue2, setTekstInputValue2] = useState("");
  const [label, setLabel] = useState("Click me");

  return (
    <article>
      <h3>Events</h3>
      <input
        type="text"
        value={tekstInputValue}
        onChange={(event) => {
          // console.log(event)
          setTekstInputValue(event.target.value);
        }}
      />

      <input
        type="text"
        value={tekstInputValue2}
        onChange={(event) => setTekstInputValue2(event.target.value)}
      />
      <button
        onClick={() => {
          console.log("Hello word");
          setLabel("You Clicked me!");
        }}
      >
        {label}
      </button>
      <h2>{tekstInputValue2}</h2>
      <Counter />
      <Formularz />
    </article>
  );
};
