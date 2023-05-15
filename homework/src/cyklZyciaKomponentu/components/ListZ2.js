import React, { useEffect, useState } from "react";

export const ListZ2 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("Komponent lista się zamontował");
  }, []);
  /* 
    jeżeli drugi parametr to pusta tablica to funckja z pierwszego parametru
    wywoała się tylko raz po zamontowaniu komponentu

  */

  useEffect(() => {
    console.log("Komponent lista się zamontował");
    console.log("Komponent się przerenderował");
  }, [counter1, counter2]);

  return (
    <div>
      <div>
        <h2>{counter1}</h2>
        <button onClick={() => setCounter1(counter1 + 1)}>+1</button>
      </div>
      <div>
        <h2>{counter2}</h2>
        <button onClick={() => setCounter2(counter2 + 1)}>+1</button>
      </div>
    </div>
  );
};