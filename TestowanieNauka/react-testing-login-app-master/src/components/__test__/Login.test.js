import React from "react";
import { render } from "@testing-library/react";
import Login from "../Login";

describe("Login Component", () => {
  test("render Login without error", () => {
    render(<Login />);
  });
});
