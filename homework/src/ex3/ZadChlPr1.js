import React from "react";
import { Child1 } from "./ZadChPr1child";

export const Parent1 = () => {
  return (
    <article>
      <h5>Parent1</h5>
      <Child1 name={'Basia'}/>
      <Child1 name={'Trata pata'}/>
    </article>
  );
};
