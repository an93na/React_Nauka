import React, { useState } from "react";

export const Calculator = () => {
    const[number1, setNumber1] = useState('');
    const[number2, setNumber2] = useState('');
    const[operation, setOperation] = useState('');
  return (
    <article>
      <h4>Calculator</h4>
      <div style={{ display: "flex", gap: 10 }}>
        <input type="text" />
        <select>
            <option value='' hidden>Wybierz działanie</option>
        </select>
        <input type="text" />
        <input type="text" readOnly />
      </div>
    </article>
  );
};
