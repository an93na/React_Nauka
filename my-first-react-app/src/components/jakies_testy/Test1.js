import React, { useState } from "react";

const ObiektUser = { name: "Pan", lastName: "Kulka", age: 16 };

const TODO = { name: "zrobić pranie", priority: "High" };

export const Test1 = () => {
  const [user, setUser] = useState(ObiektUser);
  const [zad, setZad] = useState(TODO);

  return (
    <div>
      <h3>Wyświetl Stan</h3>
      <h4>User:</h4>
      <ul style={{ textAlign: "left" }}>
        <li>
          Name: <b>{user.name}</b>
        </li>
        <li>
          Last name: <b>{user.lastName}</b>
        </li>
        <li>
          Age: <b>{user.age}</b>
        </li>
      </ul>
      <h4>Zadania:</h4>
      <ul style={{ textAlign: "left" }}>
        <li>Name: {zad.name}</li>
        <li>Piorytet: {zad.priority}</li>
      </ul>
    </div>
  );
};
