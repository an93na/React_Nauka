import React, { useState } from "react";
import { FormWarun } from "./components/Form";
import { Home } from "./components/Home";
import { LitsWar } from "./components/List";

const style = {
  margin: 20,
  padding: 20,
  border: "2px solid blue",
  display: "flex",
  borderRadius: 5,
  gap: 50,
};

export const Zad3 = () => {
  const [isChecked, setIsChecked] = useState("Home");

  const handleChange = (event) => {
    setIsChecked(event.target.value);
  };
  return (
    <article>
      <div style={style}>
        <label>
          <input
            type="radio"
            value="Form"
            name="kom"
            id=""
            checked={isChecked === "Form"}
            onChange={handleChange}
          />
          Form
        </label>
        <label>
          <input
            type="radio"
            value="Home"
            name="kom"
            id=""
            checked={isChecked === "Home"}
            onChange={handleChange}
          />
          Home
        </label>
        <label>
          <input
            type="radio"
            value="List"
            name="kom"
            id=""
            checked={isChecked === "List"}
            onChange={handleChange}
          />
          List
        </label>
      </div>

      {isChecked === "Form" && <FormWarun />}
      {isChecked === "Home" && <Home />}
      {isChecked === "List" && <LitsWar />}
    </article>
  );
};
