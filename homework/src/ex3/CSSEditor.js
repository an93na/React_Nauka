import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie na podstawie designu małego playgrounu dla CSSa.
 * Za pomocą selecta oraz inputów typu radio user powinien móc przełączać style kwadracikowi
 * w czerwonej ramce.
 * Niech user może zmieniać dwa style tego kwadraciku lub kontenerowi
 *
 * styl jaki ma się zmieniać w kwadracie to background
 * styl jaki ma się zmieniać w kontenerze (rodzicu) kwadrata to justifyContent
 *
 * Żeby to osiagnać będziesz potrzebować/potrzebowała dwóch stanów na dwie wartości dla poszczególnych propertisów CSSowych
 *
 * pierwszym rodzajem inputu jest select który wymaga odpowiednich optionów z propertisami value oraz obsłużonym w selekcie
 * eventem onChange
 *
 * drugim rodzajem inputu jest radio button - jest ich klikla każdy z inną "na sztywno" połączoną wartością (value)
 * każdy input typu radio ma obłużony event onChange w którym ma zachodzić aktualizacja stanu
 *
 * przechowywany stan (style które user wybiera) mają być zaaplikowane do kwadracika oraz jego kontera - użyj
 * do tego styli inline-owych
 *
 */

export const CSSEditor = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");
  const [justifyContentValue, setJustifyContentValue] = useState("flex-start");
  const [borderRadious, setBorderRadious] = useState("flex-start");
  const [kolor, setKolor] = useState("black");
  const [ramka, setRamka] = useState("pink");
  const [polozenie, setPolozenie] = useState("flex-start");
  const [ksztalt, setKsztalt] = useState("0");

  const handleRadioButtonChange = (e) => {
    setJustifyContentValue(e.target.value);
  };
  const handleRadioButtonChange1 = (e) => {
    setPolozenie(e.target.value);
    // console.log(e.target.value)
  };

  const KsztaltOstatecznie = (kszt) => {
    let wyniczek = 0
    for (let i=0; i<kszt; i++){
    wyniczek = i
    }
    // if (kszt < 25) {
    //   return "10px";
    // } else if (kszt >= 25 && kszt < 50) {
    //   return "20px";
    // } else if (kszt >= 50) {
    //   return "50%";
    // }
    // console.log(wyniczek)
    return wyniczek
  };

  const resultat = KsztaltOstatecznie(ksztalt);
  // console.log(resultat);

  return (
    <article>
      <p>CSSEditor</p>
      <select
        onChange={(e) => setBackgroundColor(e.target.value)}
        value={backgroundColor}
        name=""
        id=""
      >
        <option value="" hidden>
          Select color
        </option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>

      <label>
        <input
          onChange={handleRadioButtonChange}
          type="radio"
          name="flex"
          value="flex-start"
        />{" "}
        Flex-start
      </label>

      <label>
        <input
          onChange={handleRadioButtonChange}
          type="radio"
          name="flex"
          value="center"
        />{" "}
        Center
      </label>

      <label>
        <input
          onChange={handleRadioButtonChange}
          type="radio"
          name="flex"
          value="flex-end"
        />{" "}
        Flex-end
      </label>
      <select
        name=""
        id=""
        value={borderRadious}
        onChange={(e) => setBorderRadious(e.target.value)}
      >
        <option value="" hidden>
          Wybierz zaokrąglenie
        </option>
        <option value="5px">5px</option>
        <option value="20px">20px</option>
        <option value="50%">50%</option>
      </select>
      <b style={{ marginTop: 30, display: "block" }}>Preview</b>
      <div
        style={{
          display: "flex",
          padding: 20,
          margin: 20,
          border: "2px solid red",
          justifyContent: justifyContentValue,
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            background: backgroundColor,
            borderRadius: borderRadious,
          }}
        ></div>
      </div>

      <input type="color" onChange={(event) => setKolor(event.target.value)} />
      <input
        type="range"
        min={0}
        max={52}
        onChange={(e) => setKsztalt(e.target.value)}
      />
      <select
        name=""
        id=""
        value={ramka}
        onChange={(e) => setRamka(e.target.value)}
      >
        <option value="" hidden>
          Select border color
        </option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <label>
        <input
          type="radio"
          name="flex1"
          value="flex-start"
          onChange={handleRadioButtonChange1}
        />
        Flex start
      </label>
      <label>
        <input
          type="radio"
          name="flex1"
          value="center"
          onChange={handleRadioButtonChange1}
        />
        Center
      </label>
      <label>
        <input
          type="radio"
          name="flex1"
          value="flex-end"
          onChange={handleRadioButtonChange1}
        />
        Flex end
      </label>

      <div style={{ display: "flex", justifyContent: polozenie, border: "solid 3px red", padding: 20 }}>
        
        <div
          style={{
            height: 100,
            width: 100,
            border: `solid 5px ${ramka}`,
            background: kolor,
            borderRadius: resultat,
          }}
        ></div>
      </div>
    </article>
  );
};
