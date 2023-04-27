import React, { useState } from "react";

const CounterControler = (props) => {
  return <div style={{display:'flex', gap:20}}>
    <button>+1</button>
    <button>-1</button>
  </div>
}; 

const CounterOutput = (props) =>{
return <p>Wartość countera: {}</p>
}

export const PropsFunkcje = () => {
 
  return (
    <article>
      <h4>Propsy - Funkcje</h4>
      <CounterControler/>
      <CounterOutput/>
    </article>
  );
};
