import React, { useState } from "react";
import obrazek from "./1.jpg";

const CounterControler = (props) => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <button onClick={props.funkcjaInkrementujaca}>+1</button>
      <button onClick={props.funkcjaDekrementujaca}>-1</button>
    </div>
  );
};

const CounterOutput = (props) => {
  return <p>Wartość countera: {props.output}</p>;
};

const MojaSuperFunkcja = (props) => {
  return (
    <div>
      <button onClick={props.wyswietl}>Click me</button>
    </div>
  );
};

export const PropsFunkcje = () => {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState('');

  const handleDecreaseClick = () => {
    setCounter(counter - 1);
  };
  const sayBye = () => {
    console.log("say bye");
    setCounter(counter+4)
  };

  return (
    <article>
      <h4>Propsy - Funkcje</h4>
      <button onClick={() => setCounter(counter + 5)}>+5</button>
      <CounterControler
        funkcjaInkrementujaca={() => setCounter(counter + 1)}
        funkcjaDekrementujaca={handleDecreaseClick}
      />
      <CounterOutput output={counter} />
      <MojaSuperFunkcja wyswietl={sayBye} />
    </article>
  );
};
