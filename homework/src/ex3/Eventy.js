import React, { useState } from "react";

export const Eventy = () => {
  const [state, setState] = useState([]);
  const [tekstInputValue, setTekstInputValue] = useState("Siema");
  const [label, setLabel] = useState("Click me");

  return (
    <article>
      <h3>Events</h3>
      <input type="text" value={tekstInputValue} onChange={(event) => {
        // console.log(event)
        setTekstInputValue(event.target.value)}} />
      <button
        onClick={() => {
          console.log("Hello word");
          setLabel("You Clicked me!");
        }}
      >
        {label}
      </button>
    </article>
  );
};
