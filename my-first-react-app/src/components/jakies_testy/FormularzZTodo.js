import React, { useState } from "react";

export const FormularzZTodo = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const onSubmitPreventDefault = (event) => {
    event.preventDefault();
  };

  
  return (
    <div>
      <h3>Lista rzeczy</h3>
      <form onSubmit={onSubmitPreventDefault}></form>
    </div>
  );
};
