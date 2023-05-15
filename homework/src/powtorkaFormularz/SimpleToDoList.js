import { useState } from "react";

export const SimpleTodoList = () => {
    const [tasks] = useState([
      "Pouczyć się TSa",
      // NaN,
      "Pouczyć się JSa",
      // undefined,
      "Pouczyć się CSSa",
    ]);
    return (
      <article>
        <p>SimpleTodoList</p>
        <ul></ul>
      </article>
    );
  };