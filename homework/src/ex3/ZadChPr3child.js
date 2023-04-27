import React from "react";

export const Child3 = (props) => {
  return (
    <li>
      {props.label}: <b>{props.value}</b>{" "}
    </li>
  );
};
