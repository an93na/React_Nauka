import React from "react";
import { Form } from "./Form";
import { Output } from "./Output";

export const WeightConverter = () => {
  return (
    <div style={{ margin: 10, padding: 20, border: "2px solid gray" }}>
      <h4>Weight Converter</h4>
      <Form/>
      <Output/>
      <Output/>
      <Output/>
    </div>
  );
};
