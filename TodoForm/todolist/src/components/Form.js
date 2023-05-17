import React from "react";

export const Form = () => {
  return (
    <article>
      <form action="">
        <input type="text" name="" id="" placeholder="Todo title"/>
        <select name="" id="">
          <option value="" hidden>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};
