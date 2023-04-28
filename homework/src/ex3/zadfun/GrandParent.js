import React from "react";
import { ParentdoGrand } from "./Parent";

export const GrandParent = () => {
  const name = "Janusz";
  const lastName = "Grażyna";
  const age = 23;

  const jakasFunkcja = () => {
    console.log("Siema");
  };

  return (
    <article>
      <h4>GrandParent</h4>
      <ParentdoGrand
        name={name}
        lastName={lastName}
        age = {age}
        jakasFunkcja={jakasFunkcja}
      />
    </article>
  );
};
