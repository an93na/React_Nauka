import React, { useState } from "react";
import { Metric1 } from "./Metric1";
import { Metric2 } from "./Metric2";
import { Metric3 } from "./Metric3";

export const MetricsApp = () => {
  const [name, setName] = useState("Work");
  const [label, setLabel] = useState("32");
  const [prevweek, setPrevweek] = useState("36");
  return (
    <article>
      <div style={{ display: "flex", gap: 20 }}>
        <Metric1 name={name} label={label} prevweek = {prevweek}/>
        <Metric2 />
        <Metric3 />
      </div>

      <div>
      <form onSubmit={(e) => e.preventDefault()}>
      <select onChange={(event) => setName(event.target.value)}>
       <option value="" hidden>Wybierz nazwę komponentu</option>
       <option value="Work">Work</option>
       <option value="Play">Play</option>
       <option value="Study">Study</option>
      </select>
      <input type="text" value={label} onChange={(event) => setLabel(Number(event.target.value))}/>
    </form>
    <button type="Dodaj">Submit</button>
      </div>


    </article>
  );
};
