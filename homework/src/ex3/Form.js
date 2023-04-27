import React, { useState } from "react";

export const Form = () => {
  const [title, setTitle] = useState();
  const [priority, setPriority] = useState();

  return (
    <article>
      <h4>Form</h4>
      <form onSubmit={(e)=>{
        e.preventDefault()
      }}>
        <input type="text" name="" id="" placeholder="Task title..." value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <select name="" id="" onChange={(e)=>setPriority(e.target.value)}>
            <option value="" hidden>Select priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};
