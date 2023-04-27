import React, { useState } from "react";
import { IncreaseButton } from "./IncreaseButton";
import { DecreaseButton } from "./DecreaseButton";
import { Output } from "./Output";

export const CounterWithProps = () => {
  const [counter, setCounter] = useState(0);

  return (
    <article>
      <p>Counter with props</p>
      <IncreaseButton onIcreaseClick={() => setCounter(counter + 1)} />
      <Output value={counter} />
      <DecreaseButton onDecreaseClick={() => setCounter(counter - 1)} />
    </article>
  );
};
