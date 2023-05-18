import React from "react";

export const Metric = (props) => {
  const { name, value } = props;
  return (
    <article>
      <p>{name}</p>
      <p style={{ fontSize: 30, fontWeight: "bold"}}>
        {value || 0}
      </p>
    </article>
  );
};
