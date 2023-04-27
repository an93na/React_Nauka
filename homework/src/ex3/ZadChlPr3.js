import React from "react";
import { Child3 } from "./ZadChPr3child";

export const Parent3 = () => {
  return (
    <article>
      <h5>Parent3</h5>
      <ul>
        <Child3 label={"zwierze"} value={"Kot"} />
        <Child3 label={"zwierze"} value={"Pies"} />
      </ul>
    </article>
  );
};
