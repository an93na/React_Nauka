import React, { useState } from "react";

const USER = { name: "John", lastName: "Doe", age: 12 };
const TODO = { name: "pouczyć się JSa", priority: "High" };

export const WyswietlStan = () => {
  const [user, setUser] = useState(USER);
  const [todo, setTodo] = useState(TODO);
  return (
    <div>
        <h5>Wyświetl stan</h5>
        <div style={{display:"flex", gap: 20}}>
      <div >
        <h6>User:</h6>
        <p>
          Name: <b>{user.name}</b>
        </p>
        <p>
          Last name: <b>{user.lastName}</b>
        </p>
        <p>
          Age: <b>{user.age}</b>
        </p>
      </div>
      <div>
        {" "}
        <h6>TODO:</h6>
        <p>
          Name: <b>{todo.name}</b>
        </p>
        <p>
          Priority: <b>{todo.priority}</b>
        </p>
      </div>
    </div>
    </div>
  );
};
