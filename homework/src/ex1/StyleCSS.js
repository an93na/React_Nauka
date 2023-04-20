import React from "react";
import "./StyleCSS.css";

export const StyleCSS = () => {
  const zmienna = "mojaKlasa";
  return (
    <article className={zmienna}>
      StyleCSS
      <div className="klasyczna-klasa">div z klasycznie przypisaną klasą</div>
    </article>
  );
};
