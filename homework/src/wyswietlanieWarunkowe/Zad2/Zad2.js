import React, { useState } from "react";
import DOG from "./assets/dog.jpg";
import CAT from "./assets/cat.webp";
import BOTH from "./assets/both.jpeg";

export const Zad2 = () => {
  const [animal, setAnimal] = useState("");

  const handleChange = (event) => {
    setAnimal(event.target.value);
  };
  return (
    <article>
      <p>Are you cat or dog person?</p>
      <div>
        <label>
          <input
            value="dog"
            type="radio"
            name="dogOrCat"
            checked={animal === "dog"}
            onChange={handleChange}
          />{" "}
          Dog
        </label>
        <label>
          <input
            value="cat"
            type="radio"
            name="dogOrCat"
            checked={animal === "cat"}
            onChange={handleChange}
          />{" "}
          Cat
        </label>
        <label>
          <input
            value="both"
            type="radio"
            name="dogOrCat"
            checked={animal === "both"}
            onChange={handleChange}
          />{" "}
          Both
        </label>
      </div>
      {(animal === "dog" || animal === "both") && (
        <img width="300" src={DOG} alt="dog" />
      )}
      {(animal === "cat" || animal === "both") && (
        <img width="300" src={CAT} alt="cat" />
      )}
      {animal === "both" && <img width="300" src={BOTH} alt="both" />}
    </article>
  );
};
