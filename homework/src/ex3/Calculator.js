import React, { useState } from "react";

export const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");

  const rezulat = (n1, n2, op) => {
    if (op === "+") {
      return n1 + n2;
    } else if (op === "-") {
      return n1 - n2;
    } else if (op === "*") {
      return n1 * n2;
    } else if (op === "-") {
      return n1 * n2;
    }
  };

  const rozwiązanie = rezulat(number1, number2, operation);

  return (
    <article>
      <h4>Calculator</h4>
      <div style={{ display: "flex", gap: 10 }}>
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="" hidden>
            Wybierz działanie
          </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <input type="text" readOnly />
      </div>
    </article>
  );
};
