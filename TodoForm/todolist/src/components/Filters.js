import React from "react";

export const Filters = () => {
  return (
    <article>
      <label htmlFor="Title">
        <input
          type="text"
          name=""
          id="Title"
          placeholder="Enter title you search"
        />
      </label>
      <label htmlFor="Select1">
        <select name="" id="Select1">
          <option value="" hidden>
            All
          </option>
        </select>
      </label>
      <label htmlFor="Select2">
        <select name="" id="Select2">
          <option value="" hidden>
            All
          </option>
        </select>
      </label>
    </article>
  );
};
