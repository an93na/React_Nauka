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
const ComponentWithObjectAsProps = (props) => {
  const {user} = props;
    return (
    <li>
      {user.name} <b>{user.lastName}</b>
    </li>
  );
};

const BooleanComponent = (props) => {
    return props.showUnorderdList ? <ul><li>UnorderedList</li></ul> :<ol><li>OrderedList</li></ol>
}

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
      <ol>
        <ComponentWithObjectAsProps user={users[0]}/>
      </ol>
      <h4>Listy i boolean props</h4>
      <BooleanComponent showUnorderdList/>
      <BooleanComponent showUnorderdList = {true}/>
      <BooleanComponent showUnorderdList = {false}/>
    </article>
  );
};
