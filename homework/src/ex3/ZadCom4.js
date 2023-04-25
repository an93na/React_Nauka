import React, { useState } from "react";

export const ZadCom4 = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [wynik, setWynik] = useState("");
  const result = () => {
    setWynik(Number(number1) + Number(number2));
  };
  const wyczyscInput = () => {
    setNumber1('');
    setNumber2("");
    setWynik('')
  }
  return (
    <article>
      <h4>ZadCom4</h4>
      <h5>Add Two Numbers</h5>
      <input
        type="text"
        placeholder="add number1"
        value={number1}
        onChange={({ target }) => setNumber1(target.value)}
      />
      <input
        type="text"
        placeholder="add number2"
        value={number2}
        onChange={({ target }) => setNumber2(target.value)}
      />
      <button onClick={result}>
        =
      </button>
      <button onClick={wyczyscInput}>Wyczyść</button>
      <p>
        <b>Result: </b>
        {wynik}
      </p>
    </article>
  );
};
