import React from "react";
import { Metric } from "./Metric";

export const Metrics = (props) => {
  const { todos } = props;
  const total = todos.length;
  const doneAmount = todos.filter(({ status }) => status).length;
  const todoAmount = todos.filter(({ status }) => !status).length;
  const hightPriorityAmount = todos.filter(
    ({ priority }) => priority === "high"
  ).length;
  const mediumPriorityAmount = todos.filter(
    ({ priority }) => priority === "medium"
  ).length;
  const lowPriorityAmount = todos.filter(
    ({ priority }) => priority === "low"
  ).length;
  return (
    <div>
      <h3>Metrics</h3>
      <div style={{ display: "flex", gap: 20 }}>
      <Metric name="Total" value={total} />
      <Metric name="Done" value={doneAmount} />
      <Metric name="Todo" value={todoAmount} />
      <Metric name="High" value={hightPriorityAmount} />
      <Metric name="Medium" value={mediumPriorityAmount} />
      <Metric name="Low" value={lowPriorityAmount} />
      </div>
    </div>
  );
};
