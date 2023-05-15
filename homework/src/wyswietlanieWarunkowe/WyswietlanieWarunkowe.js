import React, { useState } from "react";

export const WyswietlanieWarunkowe = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <article>
      <h4>Wyświetlanie Warunkowe</h4>
      <ul>
        <li>&&</li>
        <li>Ternary</li>
        <li>if</li>
      </ul>
      wyświetl paragraf <input type="checkbox" name="" id="" checked={isChecked} onChange={(event)=> setIsChecked(prevState => !prevState)}/>
      
      {isChecked && <p>Lorem ipsum dolor sit amet.</p>}
    </article>
  );
};
