import React from "react";
import { Child2 } from "./ZadChPr2child";


export const Parent2 = () => {
  return (
    <article>
      <h5>Parent2</h5>
      <Child2 name={'Barbara'} lastName={'Bond'}/>
      <Child2 lastName={'Nazwisko'}/>
      <Child2 name={'Imie'}/>
      <Child2/>
    </article>
  );
};
