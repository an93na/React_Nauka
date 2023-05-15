import React, { useState } from "react";
import { Form } from "./Form";
import { Output } from "./Output";

export const WeightConverter = () => {
    const [value, setValue] = useState('')
  return (
    <div style={{ margin: 10, padding: 20, border: "2px solid gray" }}>
      <h4>Weight Converter</h4>
      <Form value={value} setValue={setValue}/>
      <Output value={value*1.5} color='red'/>
      <Output value={value*2.5} color='green'/>
      <Output value={value*3.5} color='blue'/>
    </div>
  );
};
