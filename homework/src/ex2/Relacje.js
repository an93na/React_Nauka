import React from "react";

const Heading = () => {
  return <h2>Uczmy się Reacta</h2>;
};

function SubHeading() {
    return <h3>To jest SubHeading</h3>
}

export const Relacje = () => {
  return (
    <article>
      Relacje
      <Heading />
      <SubHeading />
      <SubHeading />
      <SubHeading />
    </article>
  );
};
