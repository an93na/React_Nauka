import React from "react";

export const TodoList = () => {
  return (
    <article>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>{" "}
        <tbody>
          <tr>
            <td>pouczyć się Jsa</td>
            <td>High</td>
            <td>
              <input type="checkbox" name="" id="" readOnly />
            </td>
            <td>
              <div style={{ display: "flex", gap: 20 }}>
                {" "}
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};
