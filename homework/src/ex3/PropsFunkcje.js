import React, { useState } from "react";

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

export const PropsFunkcje = () => {
  const [counter, setCounter] = useState(0);

  const handleDecreaseClick = () => {
    setCounter(counter - 1);
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
    </article>
  );
};
