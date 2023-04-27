import React, { useState } from "react";

const ComponentWithProps = (props) => {
  return <div>Suma dwoch liczb: {props.number1 + props.number2}</div>;
};
const ComponentWithProps1 = (props) => {
  const { number1 = 10, number2 = 10 } = props;
  return <div>Suma dwoch liczb: {number1 + number2}</div>;
};

const ComponentWithPropsLi = (props) => {
  return (
    <li>
      {props.name} <b>{props.lastName}</b>
    </li>
  );
};

export const Props = () => {
  const [num] = useState(10);
  const users = [
    { name: "Paulina", lastName: "Paczka" },
    { name: "Janusz", lastName: "Jabłko" },
  ];
  return (
    <article>
      <h4>Propsy</h4>
      <ComponentWithProps number1={20} number2={10} />
      <ComponentWithProps number1={4} number2={num} />
      <ComponentWithProps number1={4} number2={5} />
      <ComponentWithProps number2={5} />
      <ComponentWithProps1 />
      <ComponentWithProps1 number1={12} />
      <ul>
        <ComponentWithPropsLi
          name={users[0].name}
          lastName={users[0].lastName}
        />
        <ComponentWithPropsLi
          name={users[1].name}
          lastName={users[1].lastName}
        />
      </ul>
    </article>
  );
};
