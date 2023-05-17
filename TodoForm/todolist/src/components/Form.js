import React, {useState} from "react";

export const Form = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('')
  return (
    <article>
      <form action="">
        <input type="text" name="" id="" value={title} placeholder="Todo title" onChange={(event) => setTitle(event.target.value)}/>
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
