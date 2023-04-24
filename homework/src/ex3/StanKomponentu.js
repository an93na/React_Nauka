import React, { useState } from "react";

export const StanKomponentu = () => {
  const [state, setState] = useState("test");
    
  setTimeout(()=>{
    setState('koniec Testu')
  }, 3000)

  return (
    <article>
      <h4>Stan Komponentu</h4>
      <p>{state}</p>
    </article>
  );
};
