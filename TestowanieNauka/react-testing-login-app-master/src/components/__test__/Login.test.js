import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../Login";

describe("Login Component", () => {
  test("render Login without error", () => {
    render(<Login />);
  });
  test("renders exist form elements", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submittButton = screen.getByTestId("submit");
        const resetButton = screen.getByTestId("reset");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submittButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });
});
