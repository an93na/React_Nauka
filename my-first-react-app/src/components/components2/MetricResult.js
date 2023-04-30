import React, { useState } from "react";
import { Metric1 } from "./Metric1";
import { Metric2 } from "./Metric2";
import { Metric3 } from "./Metric3";

export const MetricsApp = (props) => {

  return (
    <article>
      <div style={{ display: "flex", gap: 20 }}>
        <Metric1 />
        <Metric2 />
        <Metric3 />
      </div>

      <div>
      <form onSubmit={(e) => e.preventDefault()}>
      <select>
       <option value="" hidden>Wybierz nazwę komponentu</option>
      </select>
    </form>
      </div>


    </article>
  );
};
