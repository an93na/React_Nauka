import React from "react";
import { Metric1 } from "./Metric1";
import { Metric2 } from "./Metric2";
import { Metric3 } from "./Metric3";



export const MetricsApp = () => {
    return (
      <article>
        <div style={{ display: "flex", gap: 20 }}>
          <Metric1/>
          <Metric2/>
          <Metric3/>
        </div>
      </article>
    );
  };