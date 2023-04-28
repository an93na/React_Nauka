import React from "react";
import { GrandChild } from "./GrandChild";

export const ChildDoGrand = (props) => {
  return (
    <div style={{ margin: 10, padding: 10, border: "1px solid green" }}>
      Child
      <GrandChild name={props.name} lastName = {props.lastName} age = {props.age} jakasFunkcja = {props.jakasFunkcja}/>
    </div>
  );
};
