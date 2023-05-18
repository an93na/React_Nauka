import React from "react";

export const Filters = () => {
  return (
    <article>
      <div style={{ display: "flex", gap: 300, padding: 10 }}>
        <label htmlFor="Title">Title</label>
        <label htmlFor="Select1">Priority</label>
        <label htmlFor="Select2">Status</label>{" "}
      </div>
      <div style={{ display: "flex", gap: 20, padding: 10 }}>
        <input
          type="text"
          name=""
          id="Title"
          placeholder="Enter title you search"
        />
        <select name="" id="Select1">
          <option value="" hidden>
            All
          </option>
        </select>
        <select name="" id="Select2">
          <option value="" hidden>
            All
          </option>
        </select>
      </div>
    </article>
  );
};
