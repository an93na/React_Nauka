import React, { useState } from "react";

export const StanKomponentu = () => {
  const [state, setState] = useState("test");
  const [name, setName] = useState("Krzyś");
  const [lastName, setLastName] = useState("Koper");
  const [age, setAge] = useState(27);

  setTimeout(() => {
    setState("koniec Testu");
  }, 3000);

  return (
    <article>
      <h4>Stan Komponentu</h4>
      <p>{state}</p>
      <p>
        Name: <b>{name}</b>
      </p>
      <p>
        Last name: <b>{lastName}</b>
      </p>
      <p>Age: <b>{age}</b></p>
    </article>
  );
};
