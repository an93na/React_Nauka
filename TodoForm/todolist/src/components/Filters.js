import React from "react";

export const Filters = (props) => {
  const { search, setSearch } = props;
  return (
    <article>
      <h3>Filters</h3>
      <div style={{ display: "flex", gap: 20, padding: 10 }}>
        <label>
          Title
          <input
            type="text"
            name=""
            id="Title"
            placeholder="Enter title you search"
            value={search.title}
            onChange={(e) =>
              setSearch((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />{" "}
        </label>
        <label>
          Priority
          <select
            name=""
            id="Select1"
            value={search.priority}
            onChange={(e) =>
              setSearch((prevState) => ({
                ...prevState,
                priority: e.target.value,
              }))
            }
          >
            <option value="" hidden>
              All
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>{" "}
        </label>
        <label>
          Status
          <select
            name=""
            id="Select2"
            value={search.status}
            onChange={(e) =>
              setSearch((prevState) => ({
                ...prevState,
                status: e.target.value,
              }))
            }
          >
            <option value="" hidden>
              All
            </option>
            <option value="done">Done</option>
            <option value="todo">Todo</option>
          </select>
        </label>{" "}
      </div>
      <button
        onClick={() => {
          setSearch((prevState) => ({ ...prevState, title: "" }));
          setSearch((prevState) => ({ ...prevState, priority: "" }));
          setSearch((prevState) => ({ ...prevState, status: "" }));
        }}
      >
        Reset
      </button>
    </article>
  );
};
