import React, { useState } from "react";

export const Counter = () => {
    const[counter, setCounter]= useState(0)
  return (
    <div style={{ padding: 15, backgroundColor: "bisque", color: "black" }}>
      Counter
      <p>Counter value: {counter} </p>
      <button onClick={()=>setCounter(counter+1)}>+1</button>
    </div>
  );
};
