import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../Login";

describe("Login Component", () => {
  test("render Login without error", () => {
    render(<Login />);
  });
  test("renders exist form elements", () => {
    render(<Login/>)
    const eamilInput = screen.getByLabelText("email")
    const passwordInput = screen.getByLabelText("password")
  })
});
