import React, { useState } from "react";

export const Test2 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState("");

  const wylSubmit = (event) => {
    event.preventDefault();
    setNumber1((Number(number2)));
    setNumber2('');
  };

  return (
    <div>
      <h4>Policz:</h4>
      <p>Wartość początkowa: {number1}</p>
      <button
        onClick={() => {
          setNumber1((prevNum1) => prevNum1 + 2);
        }}
      >
        +2
      </button>

      {/* formularz */}

      <form onSubmit={wylSubmit}>
        <input
          type="text"
          placeholder="wprowadź liczbę"
          value={number2}
          onChange={({ target }) => setNumber2(target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
