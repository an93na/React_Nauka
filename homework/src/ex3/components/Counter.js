import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ padding: 15, backgroundColor: "bisque", color: "black" }}>
      Counter
      <p>Counter value: {counter} </p>
      <div style={{ display: "flex", gap: 15 }}>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          +1
        </button>
        <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
          -1
        </button>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 5)}>
          +5
        </button>
      </div>
    </div>
  );
};
