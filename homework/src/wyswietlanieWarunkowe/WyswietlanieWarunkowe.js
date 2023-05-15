import React, { useState } from "react";

const Component1 = () => {
  return (
    <div style={{ border: "1px solid red", padding: 10, margin: 10 }}>
      Component1
    </div>
  );
};
const Component2 = () => {
  return (
    <div style={{ border: "1px solid green", padding: 10, margin: 10 }}>
      Component2
    </div>
  );
};
const Component3 = () => {
  return (
    <div style={{ border: "1px solid blue", padding: 10, margin: 10 }}>
      Component3
    </div>
  );
};

export const WyswietlanieWarunkowe = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [cmp, setCmp] = useState("");
  // if(isChecked === true){
  if (isChecked) {
    return (
      <div>
        odblokowałem się
        <input
          type="checkbox"
          name=""
          id=""
          checked={isChecked}
          onChange={(event) => setIsChecked((prevState) => !prevState)}
        />
      </div>
    );
  }
  return (
    <article>
      <h4>Wyświetlanie Warunkowe</h4>
      <ul>
        <li>&&</li>
        {isChecked && <p>Lorem ipsum dolor sit amet.</p>}
        <li>Ternary</li>
        {isChecked ? (
          <div>
            <p>Checkbox jest zaznaczony</p>
          </div>
        ) : (
          <div>
            <p>Checkbox jest nie zaznaczony</p>
          </div>
        )}
        <li>if</li>
        {}
      </ul>
      wyświetl paragraf{" "}
      <input
        type="checkbox"
        name=""
        id=""
        checked={isChecked}
        onChange={(event) => setIsChecked((prevState) => !prevState)}
      />
      <select
        name=""
        id=""
        value={cmp}
        onChange={(e) => setCmp(e.target.value)}
      >
        <option value="" hidden>
          Wybierz komponent
        </option>
        <option value="cmp1">Component 1</option>
        <option value="cmp2">Component 2</option>
        <option value="cmp3">Component 3</option>
      </select>
      {cmp === "cmp1" && <Component1 />}
      {cmp === "cmp2" && <Component2 />}
      {cmp === "cmp3" && <Component3 />}
    </article>
  );
};
