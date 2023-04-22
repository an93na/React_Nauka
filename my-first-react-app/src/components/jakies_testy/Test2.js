import React, { useState } from "react";

export const Test2 = () => {
  const [number1, setNumber1] = useState(0);
  // const [number2, setNumber2] = useState(0);

  return (
    <div>
      <h4>Policz:</h4>
      <p>Wartość początkowa: {number1}</p>
      <button
        onClick={() => {
          const newNumber1 = number1 + 2;
          setNumber1(newNumber1);
        }}
      >
        +2
      </button>
    </div>
  );
};
